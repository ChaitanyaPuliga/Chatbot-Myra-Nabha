   module.exports = [
  {
    "disease": "Common Cold",
    "symptoms": [
      {"name": "Runny nose", "weight": 0.7},
      {"name": "Sneezing", "weight": 0.6},
      {"name": "Sore throat", "weight": 0.5},
      {"name": "Mild fever", "weight": 0.4},
      {"name": "Fatigue", "weight": 0.3}
    ],
    "keySymptoms": ["Runny nose", "Sneezing"],
    "prescription": "Rest, drink warm fluids, steam inhalation, over-the-counter cold medicine"
  },
  {
    "disease": "Fever",
    "symptoms": [
      {"name": "High temperature", "weight": 0.7},
      {"name": "Chills", "weight": 0.6},
      {"name": "Sweating", "weight": 0.5},
      {"name": "Body ache", "weight": 0.4},
      {"name": "Fatigue", "weight": 0.4}
    ],
    "keySymptoms": ["High temperature", "Chills"],
    "prescription": "Drink plenty of fluids, take rest, paracetamol for fever, consult doctor if persistent"
  },
  {
    "disease": "Headache (Migraine)",
    "symptoms": [
      {"name": "Throbbing head pain", "weight": 0.7},
      {"name": "Sensitivity to light", "weight": 0.6},
      {"name": "Nausea", "weight": 0.5},
      {"name": "Blurred vision", "weight": 0.4},
      {"name": "Dizziness", "weight": 0.4}
    ],
    "keySymptoms": ["Throbbing head pain", "Sensitivity to light"],
    "prescription": "Rest in dark quiet room, pain relievers, avoid triggers, consult doctor if frequent"
  },
  {
    "disease": "Diarrhea",
    "symptoms": [
      {"name": "Loose stools", "weight": 0.7},
      {"name": "Abdominal cramps", "weight": 0.6},
      {"name": "Dehydration", "weight": 0.5},
      {"name": "Nausea", "weight": 0.4},
      {"name": "Fever", "weight": 0.3}
    ],
    "keySymptoms": ["Loose stools", "Abdominal cramps"],
    "prescription": "Oral rehydration salts, drink plenty of fluids, bland diet, consult doctor if severe"
  },
  {
    "disease": "Skin Fungal Infection",
    "symptoms": [
      {"name": "Red circular patches", "weight": 0.7},
      {"name": "Itching", "weight": 0.6},
      {"name": "Skin peeling", "weight": 0.5},
      {"name": "Cracked skin", "weight": 0.4},
      {"name": "Burning sensation", "weight": 0.4}
    ],
    "keySymptoms": ["Red circular patches", "Itching"],
    "prescription": "Keep area dry and clean, apply antifungal cream, consult dermatologist if persistent"
  },
  {
    "disease": "Obesity",
    "symptoms": [
      {"name": "Overweight", "weight": 0.7},
      {"name": "Shortness of breath", "weight": 0.5},
      {"name": "Lethargy", "weight": 0.5},
      {"name": "Joint pain", "weight": 0.4},
      {"name": "High blood pressure", "weight": 0.4}
    ],
    "keySymptoms": ["Overweight", "Shortness of breath"],
    "prescription": "Balanced diet, daily exercise, regular health checkups, consult a dietician"
  },
  {
    disease: "Migraine",
    symptoms: [
      { name: "headache", weight: 0.6 },
      { name: "nausea", weight: 0.4 },
      { name: "vomiting", weight: 0.4 },
      { name: "sensitivity to light", weight: 0.5 },
      { name: "throbbing pain", weight: 0.5 }
    ],
    keySymptoms: ["sensitivity to light", "nausea"],
    prescription: "Ibuprofen, rest in dark room, stay hydrated"
  },

  {
    disease: "Type 2 Diabetes Mellitus",
    symptoms: [
      { name: "frequent urination", weight: 0.6 },
      { name: "increased thirst", weight: 0.6 },
      { name: "unexplained weight loss", weight: 0.5 },
      { name: "fatigue", weight: 0.5 },
      { name: "blurred vision", weight: 0.4 }
    ],
    keySymptoms: ["frequent urination", "increased thirst"],
    prescription: "Lifestyle modifications, diet, exercise, metformin or other hypoglycemics, regular monitoring"
  },

  {
    disease: "Hypertension (High Blood Pressure)",
    symptoms: [
      { name: "headache", weight: 0.4 },
      { name: "dizziness", weight: 0.4 },
      { name: "nosebleeds", weight: 0.3 },
      { name: "shortness of breath", weight: 0.3 },
      { name: "chest pain", weight: 0.2 }
    ],
    keySymptoms: ["headache", "dizziness"],
    prescription: "Diet low in salt, regular exercise, antihypertensive medications, periodic checkups"
  },

  {
    disease: "Asthma",
    symptoms: [
      { name: "wheezing", weight: 0.7 },
      { name: "shortness of breath", weight: 0.6 },
      { name: "chest tightness", weight: 0.5 },
      { name: "cough (worse at night)", weight: 0.5 },
      { name: "difficulty breathing during activity", weight: 0.4 }
    ],
    keySymptoms: ["wheezing", "shortness of breath"],
    prescription: "Inhaled bronchodilators, corticosteroids, avoid triggers, monitor peak flow"
  },

  {
    disease: "Chronic Kidney Disease",
    symptoms: [
      { name: "fatigue", weight: 0.5 },
      { name: "swelling in legs/ankles", weight: 0.6 },
      { name: "frequent urination at night", weight: 0.4 },
      { name: "nausea", weight: 0.4 },
      { name: "loss of appetite", weight: 0.3 }
    ],
    keySymptoms: ["swelling in legs/ankles", "frequent urination at night"],
    prescription: "Control blood pressure, diet low in protein/salt, medication, possibly dialysis"
  },

  {
    disease: "Hyperthyroidism",
    symptoms: [
      { name: "weight loss", weight: 0.6 },
      { name: "rapid heartbeat", weight: 0.6 },
      { name: "sweating", weight: 0.5 },
      { name: "tremors", weight: 0.5 },
      { name: "anxiety", weight: 0.4 }
    ],
    keySymptoms: ["rapid heartbeat", "weight loss"],
    prescription: "Anti-thyroid medications, beta-blockers, radioactive iodine or surgery in severe cases"
  },

  // Pediatric Conditions

  {
    disease: "Hand, Foot, and Mouth Disease",
    symptoms: [
      { name: "fever", weight: 0.5 },
      { name: "sore throat", weight: 0.4 },
      { name: "blisters on hands/feet", weight: 0.7 },
      { name: "mouth sores", weight: 0.7 },
      { name: "loss of appetite", weight: 0.4 }
    ],
    keySymptoms: ["mouth sores", "blisters on hands/feet"],
    prescription: "Hydration, pain relief, soft foods, keep clean, monitor for complications"
  },

  {
    disease: "Acute Otitis Media (Middle Ear Infection)",
    symptoms: [
      { name: "ear pain", weight: 0.7 },
      { name: "fever", weight: 0.5 },
      { name: "irritability in children", weight: 0.6 },
      { name: "hearing difficulty", weight: 0.4 },
      { name: "ear discharge", weight: 0.4 }
    ],
    keySymptoms: ["ear pain", "irritability in children"],
    prescription: "Analgesics, warm compress, antibiotics (if bacterial), follow up"
  },

  {
    disease: "Bronchiolitis",
    symptoms: [
      { name: "wheezing", weight: 0.6 },
      { name: "rapid breathing", weight: 0.6 },
      { name: "cough", weight: 0.5 },
      { name: "fever", weight: 0.4 },
      { name: "feeding difficulty", weight: 0.5 }
    ],
    keySymptoms: ["rapid breathing", "feeding difficulty"],
    prescription: "Supportive care, oxygen if needed, fluids, monitoring"
  },

  {
    disease: "Rickets",
    symptoms: [
      { name: "bone pain", weight: 0.6 },
      { name: "delayed growth", weight: 0.7 },
      { name: "bowed legs", weight: 0.7 },
      { name: "muscle weakness", weight: 0.5 },
      { name: "delayed motor milestones", weight: 0.5 }
    ],
    keySymptoms: ["bowed legs", "delayed growth"],
    prescription: "Vitamin D supplementation, calcium-rich diet, sunlight exposure"
  },

  // Mental Health

  {
    disease: "Major Depressive Disorder",
    symptoms: [
      { name: "persistent sadness", weight: 0.7 },
      { name: "loss of interest or pleasure", weight: 0.7 },
      { name: "changes in appetite", weight: 0.5 },
      { name: "sleep disturbances", weight: 0.6 },
      { name: "fatigue or loss of energy", weight: 0.5 }
    ],
    keySymptoms: ["persistent sadness", "loss of interest or pleasure"],
    prescription: "Psychotherapy, possible antidepressants, lifestyle changes, monitoring"
  },

  {
    disease: "Generalized Anxiety Disorder",
    symptoms: [
      { name: "excessive worry", weight: 0.7 },
      { name: "restlessness", weight: 0.5 },
      { name: "difficulty concentrating", weight: 0.5 },
      { name: "irritability", weight: 0.4 },
      { name: "sleep disturbance", weight: 0.6 }
    ],
    keySymptoms: ["excessive worry", "sleep disturbance"],
    prescription: "Cognitive behavioral therapy, relaxation techniques, possibly medication"
  },

  {
    disease: "Attention Deficit Hyperactivity Disorder (ADHD)",
    symptoms: [
      { name: "inattention", weight: 0.6 },
      { name: "hyperactivity", weight: 0.6 },
      { name: "impulsivity", weight: 0.6 },
      { name: "difficulty organizing tasks", weight: 0.5 },
      { name: "frequent fidgeting", weight: 0.4 }
    ],
    keySymptoms: ["inattention", "hyperactivity"],
    prescription: "Behavior therapy, structured routine, possible medication under supervision"
  },

  // Dermatology

  {
    disease: "Psoriasis",
    symptoms: [
      { name: "red patchy skin", weight: 0.6 },
      { name: "silvery scales", weight: 0.7 },
      { name: "itching", weight: 0.5 },
      { name: "cracked skin", weight: 0.5 },
      { name: "burning sensation", weight: 0.4 }
    ],
    keySymptoms: ["silvery scales", "red patchy skin"],
    prescription: "Topical corticosteroids, moisturizers, phototherapy, systemic treatments if severe"
  },

  {
    disease: "Eczema (Atopic Dermatitis)",
    symptoms: [
      { name: "itching", weight: 0.7 },
      { name: "dry skin", weight: 0.6 },
      { name: "redness", weight: 0.5 },
      { name: "rash", weight: 0.6 },
      { name: "weeping or crusting skin", weight: 0.4 }
    ],
    keySymptoms: ["itching", "dry skin"],
    prescription: "Moisturizers, topical steroids, avoid irritants, antihistamines"
  },

  {
    disease: "Acne Vulgaris",
    symptoms: [
      { name: "comedones (blackheads/whiteheads)", weight: 0.6 },
      { name: "inflammatory papules/pustules", weight: 0.7 },
      { name: "oily skin", weight: 0.5 },
      { name: "nodules", weight: 0.5 },
      { name: "scarring", weight: 0.4 }
    ],
    keySymptoms: ["inflammatory papules/pustules", "comedones"],
    prescription: "Topical retinoids, benzoyl peroxide, oral antibiotics or isotretinoin in severe cases"
  },

  {
    disease: "Fungal Skin Infection (Dermatophytosis)",
    symptoms: [
      { name: "ring-shaped rash", weight: 0.7 },
      { name: "itching", weight: 0.6 },
      { name: "scaling", weight: 0.5 },
      { name: "red border", weight: 0.5 },
      { name: "central clearing", weight: 0.4 }
    ],
    keySymptoms: ["ring-shaped rash", "itching"],
    prescription: "Topical antifungals, keep area dry, oral antifungals if extensive"
  },
  // Add similarly for other diseases...



  {
    disease: "ਜ਼ੁਕਾਮ (Common Cold)",
    symptoms: [
      { name: "ਬੁਖਾਰ", weight: 0.4 },
      { name: "ਖੰਘ", weight: 0.4 },
      { name: "ਗਲੇ ਵਿੱਚ ਦਰਦ", weight: 0.3 },
      { name: "ਨੱਕ ਵਗਣਾ", weight: 0.3 },
      { name: "ਛੀਕਾਂ ਆਉਣੀਆਂ", weight: 0.3 }
    ],
    keySymptoms: ["ਗਲੇ ਵਿੱਚ ਦਰਦ", "ਨੱਕ ਵਗਣਾ"],
    prescription: "ਆਰਾਮ ਕਰੋ, ਗਰਮ ਪਾਣੀ ਪੀਓ, ਜੇ ਬੁਖਾਰ ਰਹੇ ਤਾਂ ਪੈਰਾਸੀਟਾਮੋਲ ਲਵੋ"
  },
  {
    disease: "ਅਧਿਕ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ (High Blood Pressure)",
    symptoms: [
      { name: "ਸਿਰ ਦਰਦ", weight: 0.4 },
      { name: "ਚੱਕਰ ਆਉਣਾ", weight: 0.4 },
      { name: "ਨੱਕ ਵਗਣਾ (ਕਈ ਵਾਰ)", weight: 0.3 },
      { name: "ਸਾਹ ਲੈਣ ਵਿੱਚ ਦਿੱਕਤ", weight: 0.3 },
      { name: "ਛਾਤੀ ਵਿੱਚ ਦਰਦ", weight: 0.2 }
    ],
    keySymptoms: ["ਸਿਰ ਦਰਦ", "ਚੱਕਰ ਆਉਣਾ"],
    prescription: "ਨਮਕ ਘਟਾਓ, ਰੋਜ਼ਾਨਾ ਕਸਰਤ ਕਰੋ, ਦਵਾਈ ਲਵੋ, ਡਾਕਟਰੀ ਜਾਂਚ ਕਰਵਾਉਂਦੇ ਰਹੋ"
  },
  {
    disease: "ਡpression (ਢਿੱਲਾਪਨ)",
    symptoms: [
      { name: "ਲਗਾਤਾਰ ਉਦਾਸੀ", weight: 0.7 },
      { name: "ਕਿਸੇ ਕੰਮ ਵਿੱਚ ਰੁਚੀ ਨਾ ਲੈਣਾ", weight: 0.7 },
      { name: "ਨੀਂਦ ਵਿੱਚ ਗੜਬੜ", weight: 0.6 },
      { name: "ਭੁੱਖ ਵਿੱਚ ਬਦਲਾਅ", weight: 0.5 },
      { name: "ਥਕਾਵਟ", weight: 0.5 }
    ],
    keySymptoms: ["ਲਗਾਤਾਰ ਉਦਾਸੀ", "ਕਿਸੇ ਕੰਮ ਵਿੱਚ ਰੁਚੀ ਨਾ ਲੈਣਾ"],
    prescription: "ਮਨੋਵਿਗਿਆਨਕ ਸਲਾਹ, ਦਵਾਈਆਂ ਜੇ ਲੋੜ ਹੋਵੇ, ਸਹੀ ਨੀਦ ਅਤੇ ਸਿਹਤਮੰਦ ਜੀਵਨ ਸ਼ੈਲੀ"
  },
  {
    disease: "ਦਮਾ (Asthma)",
    symptoms: [
      { name: "ਸੀਟੀ ਵਾਲੀ ਸਾਹ", weight: 0.7 },
      { name: "ਸਾਹ ਲੈਣ ਵਿੱਚ ਤਕਲੀਫ਼", weight: 0.6 },
      { name: "ਛਾਤੀ ਵਿੱਚ ਘਬਰਾਹਟ", weight: 0.5 },
      { name: "ਰਾਤ ਨੂੰ ਖੰਘ", weight: 0.5 },
      { name: "ਵਿਆਯਾਮ ਕਰਦਿਆਂ ਸਾਹ ਚੜ੍ਹਨਾ", weight: 0.4 }
    ],
    keySymptoms: ["ਸੀਟੀ ਵਾਲੀ ਸਾਹ", "ਸਾਹ ਲੈਣ ਵਿੱਚ ਤਕਲੀਫ਼"],
    prescription: "ਇਨਹੇਲਰ ਵਰਤੋ, ਐਲਰਜਨ ਤੋਂ ਬਚੋ, ਡਾਕਟਰੀ ਦਿਖਾਵੋ"
  },
  {
    disease: "ਮੋਟਾਪਾ (Obesity)",
    symptoms: [
      { name: "ਵੱਧ ਵਜ਼ਨ", weight: 0.7 },
      { name: "ਸਾਹ ਲੈਣ ਵਿੱਚ ਦਿੱਕਤ", weight: 0.5 },
      { name: "ਸੁਸਤ ਅਹਿਸਾਸ", weight: 0.5 },
      { name: "ਮੋਢਿਆਂ ਜਾਂ ਗੋਡਿਆਂ ਵਿੱਚ ਦਰਦ", weight: 0.4 },
      { name: "ਰਕਤ ਚਾਪ ਵਧਣਾ", weight: 0.4 }
    ],
    keySymptoms: ["ਵੱਧ ਵਜ਼ਨ", "ਸਾਹ ਲੈਣ ਵਿੱਚ ਦਿੱਕਤ"],
    prescription: "ਸੰਤੁਲਿਤ ਖੁਰਾਕ, ਰੋਜ਼ਾਨਾ ਵਰਜ਼ਿਸ਼, ਡਾਇਟੀਸ਼ਨ ਜਾਂ ਡਾਕਟਰ ਦੀ ਸਲਾਹ"
  },
  {
    disease: "ਚਮੜੀ ਦਾ ਫੰਗਸ (Fungal Infection)",
    symptoms: [
      { name: "ਗੋਲ ਦਾਗ", weight: 0.7 },
      { name: "ਖੁਜਲੀ", weight: 0.6 },
      { name: "ਚਮੜੀ ਉਤਰਨਾ", weight: 0.5 },
      { name: "ਲਾਲੀ", weight: 0.4 },
      { name: "ਜਾਣ ਵਾਲੀ ਗੰਧ", weight: 0.3 }
    ],
    keySymptoms: ["ਗੋਲ ਦਾਗ", "ਖੁਜਲੀ"],
    prescription: "ਐਂਟੀਫੰਗਲ ਕ੍ਰੀਮ, ਸਾਫ-ਸੁਥਰਾ ਰੱਖੋ, ਗਿੱਲੇ ਕਪੜੇ ਨਾ ਪਾਓ"
  },
  {
    disease: "ਚਿਕਨ ਪੌਕਸ (Chickenpox)",
    symptoms: [
      { name: "ਫੋੜੇ ਅਤੇ ਖੁਜਲੀ ਵਾਲਾ ਰੈਸ਼", weight: 0.7 },
      { name: "ਬੁਖਾਰ", weight: 0.5 },
      { name: "ਸਰੀਰਕ ਥਕਾਵਟ", weight: 0.4 },
      { name: "ਭੁੱਖ ਨਾ ਲੱਗਣਾ", weight: 0.3 },
      { name: "ਸਿਰ ਦਰਦ", weight: 0.4 }
    ],
    keySymptoms: ["ਫੋੜੇ ਅਤੇ ਖੁਜਲੀ ਵਾਲਾ ਰੈਸ਼", "ਬੁਖਾਰ"],
    prescription: "ਆਰਾਮ, ਖੁਜਲੀ ਲਈ ਕਲਾਮਾਈਨ ਲੋਸ਼ਨ, ਐਨਟੀਹਿਸਟਾਮੀਨ"
  },
  {
    disease: "ਮਾਈਗ੍ਰੇਨ (Migrain)",
    symptoms: [
      { name: "ਤਿਵਰ ਸਿਰ ਦਰਦ", weight: 0.6 },
      { name: "ਮਤਲੀ", weight: 0.5 },
      { name: "ਉਲਟੀ", weight: 0.4 },
      { name: "ਰੌਸ਼ਨੀ ਤੋਂ ਸੰਵੇਦਨਸ਼ੀਲਤਾ", weight: 0.5 },
      { name: "ਧੜਕਣ ਵਾਲਾ ਦਰਦ", weight: 0.5 }
    ],
    keySymptoms: ["ਤਿਵਰ ਸਿਰ ਦਰਦ", "ਰੌਸ਼ਨੀ ਤੋਂ ਸੰਵੇਦਨਸ਼ੀਲਤਾ"],
    prescription: "ਇਬੂਪ੍ਰੋਫਨ, ਹਨੇਰੇ ਕਮਰੇ ਵਿੱਚ ਆਰਾਮ, ਪਾਣੀ ਪੀਣਾ"
  }
];


