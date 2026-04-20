import React, { useRef } from "react"; // Added useRef
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import heroImage from "../assets/hero.jpg";

// ... (styles stay exactly the same as your provided code)

function Home() {
  const navigate = useNavigate();
  
  // 1. Create a reference for the services section
  const servicesRef = useRef(null);

  // 2. Function to handle the smooth scroll
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const serviceList = [
    { title: "Survival Cooking 101", desc: "Master 7 basic meals before you fly abroad", path: "/cooking", category: "before" },
    { title: "Local Transport Guidance", desc: "Step-by-step directions from airport to dorm", path: "/transport", category: "before" },
    { title: "Packing Checklist", desc: "Never forget essentials with our custom list", path: "/packing", category: "before" },
    { title: "Airport Pickup", desc: "Safe pickup from airport to your residence", path: "/booking", category: "after" },
    { title: "Starter Kit Delivery", desc: "Pillow, blanket, and essentials at your door", path: "/starter-kit", category: "after" },
    { title: "Set up Bank Account", desc: "Guidance for Blocked Account and local cards", path: "/bank", category: "extended" },
    { title: "City Registration", desc: "Book your appointment for the Bürgerbüro/City hall", path: "/registration", category: "extended" },
  ];

  const renderCategory = (category, label, emoji) => (
    <section style={{ padding: "0 20px" }}>
      <div style={styles.headerWrapper}>
        <span style={{ fontSize: "32px" }}>{emoji}</span>
        <h2 style={styles.sectionTitle}>{label}</h2>
      </div>
      <div style={styles.grid}>
        {serviceList
          .filter((s) => s.category === category)
          .map((service, index) => (
            <div key={index} onClick={() => navigate(service.path)} style={{ cursor: "pointer" }}>
              <ServiceCard title={service.title} description={service.desc} />
            </div>
          ))}
      </div>
    </section>
  );

  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: "20px", color: "#111", maxWidth: "900px", fontWeight: "800" }}>
          Land in a new country with <br /> 
          <span style={{ color: "#2563eb" }}>"zero confusion"</span>
        </h1>
        <p style={{ fontSize: "21px", marginBottom: "35px", color: "#4b5563", maxWidth: "600px" }}>
          Moving abroad is hard. At DayZero we make it easy with proper guidance and essential arrival kits.
        </p>
        
        {/* 3. Updated button to call scrollToServices */}
        <button onClick={scrollToServices} style={styles.btn}>
          Explore Services
        </button>
      </section>

      {/* SERVICES SECTION - 4. Attached the ref here */}
      <main ref={servicesRef} style={{ backgroundColor: "#f9fafb", padding: "60px 0" }}>
        {renderCategory("before", "Before You Fly", "🛫")}
        {renderCategory("after", "After Arrival", "🏠")}
        {renderCategory("extended", "Extended Support", "🤝")}
      </main>

      {/* UPDATED ABOUT SECTION */}
      <section style={styles.aboutSection}>
        <h2 style={styles.aboutHeader}>About</h2>
        <h3 style={{ fontSize: "22px", color: "#64748b", marginBottom: "30px", fontWeight: "500" }}>
          Built by a student, for students.
        </h3>
        
        <div style={{ maxWidth: "750px", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: "1.8", marginBottom: "15px", fontStyle: "italic" }}>
            "Day Zero was built from lived experience.<br />
            Having moved to Germany as an international student, I encountered firsthand the uncertainty and friction that define the early days of 
            relocation — what to carry, how to navigate unfamiliar systems, and how to find a sense of comfort in a completely new environment.<br />
            Day Zero exists to bridge that very gap.<br />
            Our mission is to ensure that every student arrives not just prepared, but confident, supported, and at ease from 
            day one — transforming what is often an overwhelming transition into a seamless beginning, so that every student feels supported, 
            prepared, and welcomed from the moment they step off the plane." 
          </p>
          
          <h4 style={{ fontSize: "20px", color: "#1e293b", fontWeight: "700", marginBottom: "40px" }}>
            ~ Gayatrree Paatil
          </h4>
          
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px" }}>
            <a 
              href="mailto:gayatrreepaatil@gmail.com" 
              style={{ ...styles.contactButton, backgroundColor: "#f1f5f9", color: "#1e293b" }}
            >
              <FaEnvelope color="#2563eb" /> Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/gayatrreepaatil" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ ...styles.contactButton, backgroundColor: "#0a66c2", color: "white" }}
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
      
      <footer style={{ padding: "40px", textAlign: "center", color: "#94a3b8", fontSize: "14px", backgroundColor: "#f8fafc" }}>
        © 2026 DayZero Student Services. Built for international success.
      </footer>
    </div>
  );
}

export default Home;