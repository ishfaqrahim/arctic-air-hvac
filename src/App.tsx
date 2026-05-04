import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import LeadCapture from "./components/LeadCapture";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [openChat, setOpenChat] = useState(false);

    return (
        <div className="app">
            <main>
                <Hero setOpenChat={setOpenChat} />
                <WhyChooseUs />
                <Services />
                <Testimonials />
                <LeadCapture />
            </main>
            <Footer setOpenChat={setOpenChat} />
            {openChat && <Chatbot setOpenChat={setOpenChat} />}
        </div>
    );
}

export default App;