export default function Hero({ setOpenChat }: any) {
    return (
        <div className="hero">
            <div className="hero-content">
                <span className="badge">🏆 LA's Top Rated HVAC</span>
                <h1>Keep Your Home <span className="highlight">Perfectly Cool</span> or Warm</h1>
                <p className="tagline">
                    Fast, reliable heating & cooling in Los Angeles. 24/7 emergency service.
                </p>
                <button className="cta" onClick={() => setOpenChat(true)}>
                    Get a Free Quote →
                </button>
                <div className="trust">
                    <div className="trust-item">
                        <span className="trust-icon">⏱️</span>
                        <span>24/7 Service</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">✅</span>
                        <span>Licensed & Insured</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">💰</span>
                        <span>Free Estimates</span>
                    </div>
                </div>
            </div>
            <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          background: radial-gradient(ellipse at 20% 30%, #0f1a2e, #040b18);
          padding: 0 2rem;
          overflow: hidden;
        }
        .hero::before {
          content: "❄️";
          font-size: 300px;
          position: absolute;
          bottom: -50px;
          right: -80px;
          opacity: 0.03;
          pointer-events: none;
          transform: rotate(-10deg);
        }
        .hero-content {
          max-width: 700px;
          margin-left: 5%;
          animation: fadeInUp 0.8s ease;
          z-index: 2;
        }
        .badge {
          background: rgba(249,115,22,0.2);
          padding: 0.3rem 1rem;
          border-radius: 40px;
          font-size: 0.8rem;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(4px);
        }
        h1 {
          font-size: clamp(2.5rem, 7vw, 4.8rem);
          font-weight: 800;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }
        .highlight {
          background: linear-gradient(135deg, #f97316, #ffb347);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .tagline {
          font-size: clamp(1rem, 3vw, 1.35rem);
          opacity: 0.9;
          margin-bottom: 2rem;
        }
        .cta {
          cursor: pointer;
          background: linear-gradient(105deg, #f97316, #ff8c42);
          padding: 1rem 2.2rem;
          font-size: 1.15rem;
          font-weight: 600;
          border-radius: 50px;
          color: white;
          box-shadow: 0 12px 28px rgba(249,115,22,0.35);
          transition: all 0.25s ease;
        }
        .cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 30px rgba(249,115,22,0.45);
        }
        /* Improved trust badges */
        .trust {
          margin-top: 2.8rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: flex-start;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          padding: 0.6rem 1.2rem;
          border-radius: 60px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .trust-item:hover {
          background: rgba(249, 115, 22, 0.15);
          border-color: rgba(249, 115, 22, 0.4);
          transform: translateY(-2px);
        }
        .trust-icon {
          font-size: 1.1rem;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 700px) {
          .hero { justify-content: center; padding: 5rem 1rem; text-align: center; }
          .hero-content { margin-left: 0; }
          .trust { justify-content: center; }
          .trust-item { padding: 0.5rem 1rem; font-size: 0.8rem; }
          .hero::before { font-size: 180px; right: -40px; }
        }
      `}</style>
        </div>
    );
}
