export default function Services() {
    const servicesList = [
        { icon: "❄️", name: "AC Repair", desc: "Fast diagnosis & fixes for any brand.", color: "#0ea5e9" },
        { icon: "🔥", name: "Heating Repair", desc: "Keep your home warm & safe.", color: "#f97316" },
        { icon: "⚙️", name: "Installation", desc: "Energy‑efficient new systems.", color: "#10b981" },
        { icon: "🛠️", name: "Maintenance", desc: "Prevent breakdowns & save money.", color: "#8b5cf6" }
    ];

    return (
        <div className="services" id="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="grid">
                    {servicesList.map((s, i) => (
                        <div className="service-card" key={i} style={{ borderBottomColor: s.color }}>
                            <div className="service-icon">{s.icon}</div>
                            <h3>{s.name}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .services {
          padding: 5rem 0;
          text-align: center;
          background: linear-gradient(145deg, #0a0f1c, #0f172a);
        }
        h2 {
          font-size: 2.6rem;
          margin-bottom: 3rem;
          position: relative;
          display: inline-block;
        }
        h2:after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 20%;
          width: 60%;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #ffb347);
          border-radius: 3px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(4px);
          padding: 2rem 1.5rem;
          border-radius: 32px;
          transition: all 0.3s;
          border: 1px solid rgba(255,255,255,0.05);
          border-bottom-width: 4px;
        }
        .service-card:hover {
          transform: translateY(-8px);
          background: #1e2a3a;
          border-color: rgba(249,115,22,0.3);
        }
        .service-icon {
          font-size: 3.2rem;
          margin-bottom: 1rem;
        }
        h3 {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
        }
        p {
          opacity: 0.8;
          font-size: 0.95rem;
        }
        @media (max-width: 640px) {
          .services { padding: 3rem 0; }
          h2 { font-size: 2rem; }
        }
      `}</style>
        </div>
    );
}