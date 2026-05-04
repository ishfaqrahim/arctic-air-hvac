export default function WhyChooseUs() {
    const features = [
        { icon: "⏱️", title: "Rapid Response", desc: "Arrive within 90 minutes." },
        { icon: "💰", title: "Upfront Pricing", desc: "No hidden fees, ever." },
        { icon: "✅", title: "Licensed & Bonded", desc: "Fully certified technicians." },
        { icon: "🌟", title: "5‑Star Support", desc: "Hundreds of happy customers." }
    ];

    return (
        <div className="why-us">
            <div className="container">
                <h2>Why Homeowners Trust Arctic Air</h2>
                <div className="features-grid">
                    {features.map((f, idx) => (
                        <div className="feature" key={idx}>
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .why-us {
          padding: 5rem 0;
          background: linear-gradient(115deg, #0f172a 0%, #0b1120 100%);
        }
        .why-us h2 {
          font-size: 2.4rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }
        .feature {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(8px);
          padding: 2rem 1.5rem;
          border-radius: 32px;
          transition: 0.25s;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.03);
        }
        .feature:hover {
          background: #1e2a3a;
          transform: translateY(-5px);
        }
        .feature-icon {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #fff, #90cdf4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .feature h3 {
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
        }
        @media (max-width: 600px) {
          .why-us { padding: 3rem 0; }
          .why-us h2 { font-size: 1.9rem; }
        }
      `}</style>
        </div>
    );
}