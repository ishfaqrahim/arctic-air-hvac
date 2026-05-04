// src/components/LeadCapture.tsx
import { useState } from "react";

export default function LeadCapture() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        zip: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const response = await fetch(
                `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Table%201`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fields: {
                            Name: formData.name,
                            "Phone Number": formData.phone,
                            "Service Type": formData.service,
                            "Zip Code": formData.zip,
                            Timestamp: new Date().toISOString(),
                        },
                    }),
                }
            );

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err?.error?.message || "Submission failed");
            }

            setStatus("success");
            setFormData({ name: "", phone: "", service: "", zip: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (err: any) {
            setStatus("error");
            setErrorMsg(err.message);
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section className="lead-capture">
            <div className="container">
                <h2>Get a Free Quote</h2>
                <p className="subtitle">Fill out the form and we’ll call you within 2 hours.</p>

                <form onSubmit={handleSubmit} className="lead-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Select service</option>
                        <option>AC repair</option>
                        <option>Heating repair</option>
                        <option>Installation</option>
                        <option>Maintenance</option>
                    </select>
                    <input
                        type="text"
                        name="zip"
                        placeholder="Zip code *"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={status === "loading"}>
                        {status === "loading" ? "Sending..." : "Request Free Quote"}
                    </button>
                    {status === "success" && <p className="success-msg">✅ Thanks! We’ll call you soon.</p>}
                    {status === "error" && <p className="error-msg">❌ {errorMsg}</p>}
                </form>
            </div>

            <style>{`
        .lead-capture {
          padding: 5rem 0;
          background: linear-gradient(145deg, #0f172a, #0a0f1c);
          text-align: center;
        }
        .lead-capture h2 {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }
        .subtitle {
          opacity: 0.8;
          margin-bottom: 2rem;
        }
        .lead-form {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .lead-form input, .lead-form select {
          padding: 14px;
          border-radius: 60px;
          border: none;
          background: #1e293b;
          color: white;
          font-size: 1rem;
        }
        .lead-form button {
          background: linear-gradient(105deg, #f97316, #ff8c42);
          padding: 14px;
          border-radius: 60px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          color: white;
          transition: 0.2s;
        }
        .lead-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(249,115,22,0.4);
        }
        .success-msg {
          color: #4ade80;
          margin-top: 0.5rem;
        }
        .error-msg {
          color: #f87171;
          margin-top: 0.5rem;
        }
        @media (max-width: 640px) {
          .lead-capture { padding: 3rem 0; }
          .lead-capture h2 { font-size: 2rem; }
        }
      `}</style>
        </section>
    );
}