const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();

// Optional: OpenAI Whisper STT (set OPENAI_API_KEY in .env)
const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ========================
// 🧬 Dataset
// ========================
const dataset = [
  {
    disease: "Obesity",
    symptoms: [
      { name: "weight gain", weight: 0.7 },
      { name: "shortness of breath", weight: 0.5 },
      { name: "fatigue", weight: 0.5 },
      { name: "joint pain", weight: 0.3 }
    ],
    keySymptoms: ["weight gain", "fatigue"],
    prescription: "Exercise, low-fat diet, regular checkups."
  },
  {
    disease: "Common Cold",
    symptoms: [
      { name: "runny nose", weight: 0.6 },
      { name: "sneezing", weight: 0.5 },
      { name: "sore throat", weight: 0.5 },
      { name: "mild fever", weight: 0.4 }
    ],
    keySymptoms: ["runny nose", "sneezing"],
    prescription: "Rest, hydration, over-the-counter meds."
  }
];

// ========================
// ⚙️ Symptom Matching Logic
// ========================
function diagnose(userText, context = [], clarificationsAsked = 0) {
  const results = dataset.map(entry => {
    let score = 0;
    const maxScore = entry.symptoms.reduce((sum, s) => sum + s.weight, 0);

    entry.symptoms.forEach(({ name, weight }) => {
      if (userText.includes(name) || context.includes(name)) score += weight;
    });

    const confidence = parseFloat(((score / maxScore) * 100).toFixed(1));
    return {
      disease: entry.disease,
      prescription: entry.prescription,
      confidence,
      keySymptoms: entry.keySymptoms
    };
  });

  const sorted = results.sort((a, b) => b.confidence - a.confidence);
  const top = sorted[0];
  const second = sorted[1];

  if (top.confidence < 50 && clarificationsAsked < 3) {
    const askSymptom = [...top.keySymptoms, ...(second ? second.keySymptoms : [])]
      .find(sym => !context.includes(sym));
    if (askSymptom) {
      return { clarify: true, question: `Do you have ${askSymptom}?` };
    }
  }

  const top3 = sorted.filter(r => r.confidence > 0).slice(0, 3);
  if (top3.length === 0) {
    return {
      clarify: false,
      diseases: [
        {
          disease: "Unknown condition",
          prescription: "Please consult a doctor.",
          confidence: 0
        }
      ]
    };
  }

  return { clarify: false, diseases: top3 };
}

// ========================
// 🧠 Express App
// ========================
const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(bodyParser.json());

// ----- Text Mode -----
app.post("/diagnose", (req, res) => {
  const { symptoms, context, clarificationsAsked } = req.body;
  const result = diagnose(
    (symptoms || "").toLowerCase(),
    context || [],
    clarificationsAsked || 0
  );
  res.json(result);
});

// ----- Voice Mode -----
app.post("/voice", upload.single("audio"), async (req, res) => {
  try {
    if (!process.env.OPENAI_API_KEY)
      return res.status(400).json({ error: "Missing OPENAI_API_KEY" });

    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(req.file.path),
      model: "whisper-1"
    });

    const text = transcription.text.toLowerCase();
    const { context, clarificationsAsked } = req.body;
    const result = diagnose(text, context || [], clarificationsAsked || 0);

    res.json({ text, ...result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Speech processing failed" });
  }
});

// ========================
// 🚀 Start Server
// ========================
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
