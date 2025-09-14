  const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const micBtn = document.getElementById("mic-btn");

let context = [];
let clarificationsAsked = 0;
let pendingSymptom = null; // symptom for current YES/NO question

// Calculate speech duration in ms (approx 150 words per minute)
function estimateDuration(text) {
  const words = text.trim().split(/\s+/).length;
  return (words / 150) * 60 * 1000; // ms
}

// Speak text and return a promise that resolves when done
function speakWithDuration(text) {
  return new Promise((resolve) => {
    if ("speechSynthesis" in window && text.trim() !== "") {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.onend = resolve;
      window.speechSynthesis.speak(utterance);
    } else resolve();
  });
}

// Animate confidence bar over a given duration
function animateBar(barElement, targetPercent, duration) {
  return new Promise((resolve) => {
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      barElement.style.width = targetPercent * progress + "%";
      if (progress < 1) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });
}

// Add message to chat
function addMessage(text, sender, options = null) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerHTML = text;

  if (options) {
    const btnContainer = document.createElement("div");
    btnContainer.style.marginTop = "5px";

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt.label;
      btn.style.marginRight = "5px";
      btn.addEventListener("click", () => opt.onClick());
      btnContainer.appendChild(btn);
    });

    msg.appendChild(btnContainer);
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Remove HTML tags
function stripHTML(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

// Handle YES/NO clarification (button or voice)
function handleClarification(isYes) {
  if (!pendingSymptom) return;
  if (isYes) context.push(pendingSymptom);
  clarificationsAsked++;
  sendInput(isYes ? pendingSymptom : "", true);
  pendingSymptom = null;
}

// Send input to backend
async function sendInput(text, isClarification = false) {
  if (!text && !isClarification) return;

  if (!isClarification && text.trim() !== "") addMessage(text, "user");

  const typingMsg = document.createElement("div");
  typingMsg.classList.add("message", "bot");
  typingMsg.setAttribute("id", "typing");
  typingMsg.innerHTML = `<em>Bot is typing<span class="dots"></span></em>`;
  chatBox.appendChild(typingMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const payload = {
      symptoms: text || "",
      context,
      clarificationsAsked
    };

    const res = await fetch("http://localhost:5000/diagnose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    await new Promise(r => setTimeout(r, 500));
    typingMsg.remove();

    // Clarification logic (max 2)
    if (data.clarify && clarificationsAsked < 2) {
      pendingSymptom = data.question.split("Do you have ")[1].replace("?", "");

      addMessage(data.question, "bot", [
        { label: "Yes", onClick: () => handleClarification(true) },
        { label: "No", onClick: () => handleClarification(false) }
      ]);

      // Speak clarification
      speakWithDuration(stripHTML(data.question));
      return;
    }

    // Display top diseases
    if (data.diseases && data.diseases.length > 0) {
      for (let idx = 0; idx < data.diseases.length; idx++) {
        const item = data.diseases[idx];
        let color = idx === 0 ? "#28a745" : idx === 1 ? "#ffc107" : "#dc3545";

        const container = document.createElement("div");
        container.style.marginBottom = "12px";
        container.innerHTML = `
          <strong>${idx + 1}. ${item.disease} (${item.confidence}%)</strong><br/>
          Prescription: ${item.prescription}<br/>
          <div style="background: #e0e0e0; border-radius: 5px; height: 12px; margin-top: 5px;">
            <div class="confidence-bar" style="width: 0%; background: ${color}; height: 100%; border-radius: 5px;"></div>
          </div>
        `;
        chatBox.appendChild(container);
        chatBox.scrollTop = chatBox.scrollHeight;

        const bar = container.querySelector(".confidence-bar");
        const speechText = `${item.disease}, confidence ${item.confidence} percent. Recommended prescription: ${item.prescription}`;
        const duration = estimateDuration(speechText);

        // Speak and animate together
        await Promise.all([
          speakWithDuration(speechText),
          animateBar(bar, item.confidence, duration)
        ]);
      }
    } else {
      addMessage("No matching diseases found. Please consult a doctor.", "bot");
      speakWithDuration("No matching diseases found. Please consult a doctor.");
    }

    clarificationsAsked = 0;
    pendingSymptom = null;

  } catch (err) {
    typingMsg.remove();
    addMessage("Error connecting to server. Please check if backend is running.", "bot");
    speakWithDuration("Error connecting to server. Please check if backend is running.");
  }
}

// Send button
sendBtn.addEventListener("click", () => sendInput(userInput.value.trim()));

// Voice input
let recognition;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => micBtn.classList.add("recording");
  recognition.onend = () => micBtn.classList.remove("recording");

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();

    if (pendingSymptom) {
      if (transcript.includes("yes")) handleClarification(true);
      else if (transcript.includes("no")) handleClarification(false);
      else sendInput(transcript);
    } else {
      sendInput(transcript);
    }
  };

  micBtn.addEventListener("click", () => recognition.start());
} else {
  micBtn.disabled = true;
  micBtn.title = "Voice input not supported in this browser";
}
const x=document.querySelector(".input-area");
x.addEventListener("keydown",(event)=>{
  if(event.key==="Enter"){
    sendInput(userInput.value.trim());
  }});
