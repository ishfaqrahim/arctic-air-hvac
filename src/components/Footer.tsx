export default function Footer({ setOpenChat }: any) {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <span>❄️ Arctic Air HVAC</span>
                    <p>Your comfort is our mission – 24/7 emergency service.</p>
                </div>
                <div className="footer-hours">
                    <h4>Business Hours</h4>
                    <p>Mon - Fri: 7am - 9pm</p>
                    <p>Sat - Sun: 8am - 6pm</p>
                    <p>Emergency: 24/7</p>
                </div>
                <div className="footer-links">
                    <button className="footer-cta" onClick={() => setOpenChat(true)}>
                        Request a Free Estimate
                    </button>
                    <p className="copyright">© 2025 Arctic Air Heating & Cooling</p>
                </div>
            </div>
            <style>{`
        .footer {
          background: #050b16;
          padding: 3rem 2rem 1.5rem;
          border-top: 2px solid rgba(249,115,22,0.2);
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .footer-brand span {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #a0c4ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .footer-brand p {
          margin: 0.5rem 0 1rem;
          opacity: 0.7;
          max-width: 260px;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          font-size: 1.5rem;
          text-decoration: none;
          opacity: 0.7;
          transition: 0.2s;
        }
        .social-links a:hover {
          opacity: 1;
          color: #f97316;
        }
        .footer-hours h4 {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .footer-hours p {
          opacity: 0.7;
          font-size: 0.85rem;
        }
        .footer-cta {
          cursor: pointer;
          background: transparent;
          border: 2px solid #f97316;
          color: #f97316;
          padding: 0.7rem 1.6rem;
          border-radius: 40px;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .footer-cta:hover {
          background: #f97316;
          color: white;
        }
        .copyright {
          font-size: 0.7rem;
          opacity: 0.4;
          text-align: center;
          width: 100%;
        }
        @media (max-width: 800px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-brand p { margin-left: auto; margin-right: auto; }
          .social-links { justify-content: center; }
        }
      `}</style>
        </footer>
    );
}