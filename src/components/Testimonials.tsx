export default function Testimonials() {
    const reviews = [
        { name: "Lisa M.", text: "They fixed my AC in under 2 hours on a 100° day. Highly recommend!", rating: 5 },
        { name: "David R.", text: "Professional, honest, and affordable. My go‑to for HVAC.", rating: 5 },
        { name: "Jennifer K.", text: "Great communication and fast installation. Will use again.", rating: 5 }
    ];
    return (
        <div className="testimonials">
            <div className="container">
                <h2>What Our Clients Say</h2>
                <div className="review-grid">
                    {reviews.map((r, i) => (
                        <div className="review-card" key={i}>
                            <div className="rating">
                                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                            </div>
                            <p>“{r.text}”</p>
                            <h4>— {r.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .testimonials {
          padding: 5rem 0;
          background: radial-gradient(ellipse at 70% 20%, #0f172a, #030712);
          text-align: center;
        }
        .testimonials h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }
        .review-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }
        .review-card {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(8px);
          padding: 2rem;
          border-radius: 32px;
          max-width: 340px;
          text-align: left;
          transition: 0.2s;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .review-card:hover {
          transform: scale(1.02);
          background: #1e2a3a;
        }
        .rating {
          color: #fbbf24;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          letter-spacing: 2px;
        }
        .review-card p {
          font-style: normal;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .review-card h4 {
          color: #f97316;
        }
        @media (max-width: 700px) {
          .testimonials { padding: 3rem 0; }
          .testimonials h2 { font-size: 2rem; }
        }
      `}</style>
        </div>
    );
}