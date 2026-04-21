import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import heroImage from "../assets/hero.jpg";

function Home() {
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  const styles = {
    hero: {
      height: "75vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#111",
      backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "0 20px"
    },
    headerWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "30px",
      marginTop: "40px",
    },
    sectionTitle: {
      fontSize: "36px",
      color: "#1e293b",
      margin: "0",
      fontWeight: "800",
      letterSpacing: "-0.5px"
    },
    integrationHub: {
      backgroundColor: "#eff6ff",
      border: "1px solid #bfdbfe",
      borderRadius: "16px",
      padding: "30px",
      maxWidth: "850px",
      margin: "0 auto 40px auto",
      textAlign: "left",
      boxShadow: "0 4px 12px rgba(37, 99, 235, 0.05)"
    },
    grid: {
      display: "flex",
      gap: "25px",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto 60px auto"
    },
    btn: {
      padding: "16px 36px",
      fontSize: "18px",
      fontWeight: "600",
      backgroundColor: "#2563eb",
      color: "white",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 4px 10px rgba(37, 99, 235, 0.2)"
    },
    aboutSection: {
      padding: "80px 20px",
      backgroundColor: "#ffffff",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderTop: "1px solid #f1f5f9"
    },
    aboutHeader: {
      fontSize: "28px",
      color: "#1e293b",
      fontWeight: "700",
      marginBottom: "10px",
      letterSpacing: "1px",
      textTransform: "uppercase"
    },
    contactButton: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px 24px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      textDecoration: "none",
      transition: "0.3s",
      margin: "10px"
    }
  };

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
    { title: "City Registration", desc: "Book your appointment for the Bürgerbüro", path: "/registration", category: "extended" },
  ];

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
        <button onClick={scrollToServices} style={styles.btn}>
          Explore Services
        </button>
      </section>

      {/* SERVICES SECTION */}
      <main ref={servicesRef} style={{ backgroundColor: "#f9fafb", padding: "60px 0" }}>
        
        {/* BEFORE YOU FLY & INTEGRATION HUB */}
        <section style={{ padding: "0 20px" }}>
          <div style={styles.headerWrapper}>
            <span style={{ fontSize: "32px" }}>🛫</span>
            <h2 style={styles.sectionTitle}>Before You Fly</h2>
          </div>

          <div style={styles.integrationHub}>
            <h3 style={{ color: "#2563eb", marginTop: 0, fontSize: "22px" }}>🧠 The Integration Hub</h3>
            <p style={{ color: "#475569", fontSize: "17px", fontWeight: "600", marginBottom: "15px" }}>
              "Know the unwritten rules so you don't feel like an outsider."
            </p>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
              Our integration program ensures you land with confidence. Master the cultural nuances of Germany before you even pack your bags.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "12px" }}>
              {[
                "Supermarket navigation & Pfand system",
                "WG (Shared Flat) etiquette & kitchen rules",
                "Public etiquettes (Elevators, Punctuality)",
                "Building social connections in a new city"
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#1e293b" }}>
                  <FaCheckCircle color="#10b981" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.grid}>
            {serviceList.filter(s => s.category === "before").map((service, index) => (
              <div key={index} onClick={() => navigate(service.path)} style={{ cursor: "pointer" }}>
                <ServiceCard title={service.title} description={service.desc} />
              </div>
            ))}
          </div>
        </section>

        {/* AFTER ARRIVAL */}
        <section style={{ padding: "0 20px" }}>
          <div style={styles.headerWrapper}>
            <span style={{ fontSize: "32px" }}>🏠</span>
            <h2 style={styles.sectionTitle}>After Arrival</h2>
          </div>
          <div style={styles.grid}>
            {serviceList.filter(s => s.category === "after").map((service, index) => (
              <div key={index} onClick={() => navigate(service.path)} style={{ cursor: "pointer" }}>
                <ServiceCard title={service.title} description={service.desc} />
              </div>
            ))}
          </div>
        </section>

        {/* EXTENDED SUPPORT */}
        <section style={{ padding: "0 20px" }}>
          <div style={styles.headerWrapper}>
            <span style={{ fontSize: "32px" }}>🤝</span>
            <h2 style={styles.sectionTitle}>Extended Support</h2>
          </div>
          <div style={styles.grid}>
            {serviceList.filter(s => s.category === "extended").map((service, index) => (
              <div key={index} onClick={() => navigate(service.path)} style={{ cursor: "pointer" }}>
                <ServiceCard title={service.title} description={service.desc} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ABOUT SECTION */}
      <section style={styles.aboutSection}>
        <h2 style={styles.aboutHeader}>About</h2>
        <h3 style={{ fontSize: "22px", color: "#64748b", marginBottom: "30px", fontWeight: "500" }}>
          Built by a student, for students.
        </h3>
        
        <div style={{ maxWidth: "750px", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: "1.8", marginBottom: "15px", fontStyle: "italic" }}>
            "Day Zero was built from lived experience.
            Having moved to Germany as an international student, I encountered firsthand the uncertainty and friction that define the early days of
            relocation — what to carry, how to navigate unfamiliar systems, and how to find a sense of comfort in a completely new environment.
            Day Zero exists to bridge that very gap.
            Our mission is to ensure that every student arrives not just prepared, but confident, supported, and at ease from
            day one — transforming what is often an overwhelming transition into a seamless beginning.
            I created DayZero to solve the real-world challenges I faced as an international student, so that every student feels supported, prepared, and welcomed from the
            moment they step off the plane."
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