

 const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dataset = require("./data");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/diagnose", (req, res) => {
  const userText = req.body.symptoms.toLowerCase();
  const context = req.body.context || []; // previously confirmed symptoms
  const clarificationsAsked = req.body.clarificationsAsked || 0; // number of clarification questions already asked

  // Calculate weighted scores for each disease
  const results = dataset.map(entry => {
    let score = 0;
    const maxScore = entry.symptoms.reduce((sum, s) => sum + s.weight, 0);

    entry.symptoms.forEach(({ name, weight }) => {
      if (userText.includes(name) || context.includes(name)) score += weight;
    });

    const confidence = ((score / maxScore) * 100).toFixed(1);
    return {
      disease: entry.disease,
      prescription: entry.prescription,
      confidence: parseFloat(confidence),
      keySymptoms: entry.keySymptoms
    };
  });

  // Sort diseases by confidence descending
  const sorted = results.sort((a, b) => b.confidence - a.confidence);
  const top = sorted[0];
  const second = sorted[1];

  // Decide if clarification is needed (top confidence < 50% and less than 3 questions asked)
  if (top.confidence < 50 && clarificationsAsked < 3) {
    // Ask about a key symptom that hasn't been confirmed yet
    const askSymptom = [...top.keySymptoms, ...(second ? second.keySymptoms : [])]
      .find(sym => !context.includes(sym));
    if (askSymptom) {
      return res.json({ clarify: true, question: `Do you have ${askSymptom}?` });
    }
  }

  // Otherwise, return top 3 diseases
  const top3 = sorted.filter(r => r.confidence > 0).slice(0, 3);
  if (top3.length === 0) {
    return res.json({
      clarify: false,
      diseases: [
        {
          disease: "Unknown condition",
          prescription: "Please consult a doctor for a proper diagnosis.",
          confidence: 0
        }
      ]
    });
  }

  res.json({ clarify: false, diseases: top3 });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
