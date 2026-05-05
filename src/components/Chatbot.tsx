import { useState } from "react";

const steps = [
    "What's your name?",
    "What's your phone number?",
    "What service do you need? (AC repair, heating, installation, or maintenance)",
    "What's your zip code?"
];

const serviceOptions = [
    "AC repair",
    "Heating repair",
    "Installation",
    "Maintenance"
];

const fields = ["name", "phone", "service", "zip"];

export default function Chatbot({ setOpenChat }: any) {
    const [step, setStep] = useState(0);
    const [input, setInput] = useState("");
    const [data, setData] = useState<any>({});
    const [status, setStatus] = useState<"form" | "submitting" | "done">("form");
    const [error, setError] = useState("");

    const validate = () => {
        const value = input.trim();

        if (!value) return "Please fill in the field";

        if (step === 1 && value.length < 7) {
            return "Enter valid phone number";
        }

        if (step === 3 && value.length < 4) {
            return "Enter valid zip code";
        }

        return "";
    };

    const handleNext = async () => {
        setError("");

        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        const field = fields[step];
        const updatedData = { ...data, [field]: input.trim() };

        setData(updatedData);
        setInput("");

        if (step < 3) {
            setStep(step + 1);
        } else {
            await submitLead(updatedData);
        }
    };

    const submitLead = async (finalData: any) => {
        setStatus("submitting");
        setError("");
        console.log("BASE ID:", import.meta.env.VITE_AIRTABLE_BASE_ID);
        console.log("TOKEN:", import.meta.env.VITE_AIRTABLE_API_TOKEN);
        try {
            const response = await fetch(
                `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Table%201`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fields: {
                            Name: finalData.name,
                            "Phone Number": finalData.phone,
                            "Service Type": finalData.service,
                            "Zip Code": finalData.zip,
                            Timestamp: new Date().toISOString()
                        }
                    })
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result?.error?.message || "Airtable error");
            }

            setStatus("done");
        } catch (err: any) {
            setError(err.message || "Submission failed");
            setStatus("form");
        }
    };

    /* SUCCESS SCREEN */
    if (status === "done") {
        return (
            <div className="chat-overlay">
                <div className="chat-card success">
                    <h3>✅ Thanks {data.name}!</h3>
                    <p>
                        Someone from Arctic Air will call you at{" "}
                        <strong>{data.phone}</strong> within 2 hours.
                    </p>
                    <button onClick={() => setOpenChat(false)} className="close-btn">
                        Close
                    </button>
                </div>
                <style>{chatStyles}</style>
            </div>
        );
    }

    /* LOADING SCREEN (FULL UI BLOCK) */
    if (status === "submitting") {
        return (
            <div className="chat-overlay">
                <div className="chat-card">
                    <div className="loader-box">
                        <div className="spinner"></div>
                        <p>Submitting your request...</p>
                    </div>
                </div>
                <style>{chatStyles}</style>
            </div>
        );
    }

    return (
        <div className="chat-overlay">
            <div className="chat-card">

                <h3>❄️ Arctic Assistant</h3>

                {/* PROGRESS */}
                <div className="step-indicator">
                    Step {step + 1} / 4
                </div>

                <p className="step-text">{steps[step]}</p>

                {step === 2 ? (
                    <select value={input} onChange={(e) => setInput(e.target.value)}>
                        <option value="">Select service</option>
                        {serviceOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={step === 1 ? "tel" : "text"}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your answer..."
                    />
                )}

                {error && <div className="error">{error}</div>}

                <div className="chat-actions">
                    <button onClick={handleNext} className="next-btn">
                        {step === 3 ? "Submit" : "Next"}
                    </button>

                    <button onClick={() => setOpenChat(false)} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </div>

            <style>{chatStyles}</style>
        </div>
    );
}

const chatStyles = `
.chat-overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at top, rgba(15,23,42,0.95), rgba(2,6,23,0.98));
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

/* CARD */
.chat-card {
  width: 100%;
  max-width: 420px;
  background: linear-gradient(180deg, #0f172a, #020617);
  border-radius: 20px;
  padding: 24px;
  color: white;
  box-shadow: 0 25px 60px rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.06);
  animation: fadeIn 0.3s ease;
}

/* HEADER */
.chat-card h3 {
  font-size: 1.4rem;
  margin-bottom: 6px;
}

.step-indicator {
  font-size: 12px;
  opacity: 0.6;
  margin-bottom: 10px;
}

/* QUESTION */
.step-text {
  font-size: 1.05rem;
  margin: 12px 0 18px;
  line-height: 1.4;
}

/* INPUT */
input, select {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
  background: #020617;
  color: white;
  font-size: 14px;
  transition: 0.2s;
}

input:focus, select:focus {
  outline: none;
  border-color: #f97316;
  box-shadow: 0 0 0 2px rgba(249,115,22,0.2);
}

/* ERROR */
.error {
  color: #ff7b72;
  font-size: 0.8rem;
  margin-top: 6px;
}

/* ACTIONS */
.chat-actions {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

/* BUTTONS */
.next-btn {
  flex: 1;
  background: linear-gradient(135deg, #f97316, #fb923c);
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  transition: 0.25s;
}

.next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(249,115,22,0.4);
}

.cancel-btn {
  background: #1e293b;
  border: none;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  color: #cbd5f5;
}

.close-btn {
  margin-top: 16px;
  width: 100%;
  background: linear-gradient(135deg, #f97316, #fb923c);
  padding: 14px;
  border-radius: 12px;
  font-weight: 600;
}

/* SUCCESS */
.success {
  text-align: center;
}

.success h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.success p {
  opacity: 0.8;
}

/* ANIMATION */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: translateY(0);}
}

/* MOBILE */
@media (max-width: 480px) {
  .chat-card {
    padding: 18px;
  }
}
.loader-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.step-indicator {
  font-size: 12px;
  opacity: 0.6;
  margin-bottom: 8px;
}

.loader-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 50px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255,255,255,0.1);
  border-top: 4px solid #f97316;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
`;