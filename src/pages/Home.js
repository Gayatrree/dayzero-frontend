import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
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
      backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${heroImage})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      padding: "0 20px"
    },
    sectionTitle: {
      fontSize: "36px",
      color: "#1e293b",
      margin: "0",
      fontWeight: "800",
      letterSpacing: "-0.5px"
    },
    headerWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "20px",
      marginTop: "40px",
    },
    integrationHook: {
      fontSize: "clamp(22px, 3vw, 30px)",
      fontWeight: "300",
      fontStyle: "italic",
      color: "#4b5563",
      lineHeight: "1.5",
      maxWidth: "900px",
      margin: "20px auto 50px auto",
      textAlign: "center"
    },
    verticalList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "60px",
      maxWidth: "850px",
      margin: "0 auto 100px auto",
      textAlign: "center"
    },
    moduleTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#1e293b",
      marginBottom: "12px",
      textTransform: "uppercase",
      letterSpacing: "1.5px"
    },
    moduleDesc: {
      fontSize: "16px",
      color: "#64748b",
      lineHeight: "1.8",
      margin: "0"
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
      padding: "100px 20px",
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
    { title: "Survival Cooking 101", desc: "Master basic meals before you fly abroad", path: "/cooking", category: "before" },
    { title: "Local Transport Guidance", desc: "Step-by-step directions from airport to your dorm", path: "/transport", category: "before" },
    { title: "Packing Checklist", desc: "Never forget essentials with our customised packing list", path: "/packing", category: "before" },
    { title: "Airport Pickup", desc: "Safe pickup from airport to your residence (Coming soon ...)", path: "/booking", category: "after" },
    { title: "Starter Kit Delivery", desc: "Pillow, blanket, and essentials at your door (Coming soon ...)", path: "/starter-kit", category: "after" },
    { title: "Set up Bank Account", desc: "Guidance for Blocked Account and local cards (Coming soon ...)", path: "/bank", category: "extended" },
    { title: "City Registration", desc: "Book your appointment for the Stadt Anmeldung (Coming soon ...)", path: "/registration", category: "extended" },
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
        <p style={{ 
          fontSize: "22px", 
          marginBottom: "35px", 
          color: "#1e293b", 
          maxWidth: "640px", 
          fontWeight: "600",
          lineHeight: "1.6"
        }}>
          Moving abroad is hard. At DayZero we make it easy with proper guidance and essential arrival kits.
        </p>
        <button onClick={scrollToServices} style={styles.btn}>
          Explore Services
        </button>
      </section>

      {/* --- WHAT ARE WE & FOR WHOM --- */}
      <section style={{ padding: "100px 20px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px" }}>
          <div>
            <h2 style={{ ...styles.moduleTitle, fontSize: "22px", color: "#2563eb", marginBottom: "20px" }}>What are we?</h2>
            <p style={{ fontSize: "17px", color: "#4b5563", lineHeight: "1.8" }}>
              DayZero is an initiative designed to help students transition smoothly into life abroad. 
              We guide you through every practical aspect—from planning your journey and packing smartly 
              to understanding everyday life in a new country—so your transition feels comfortable, not overwhelming.
            </p>
          </div>

          <div>
            <h2 style={{ ...styles.moduleTitle, fontSize: "22px", color: "#2563eb", marginBottom: "20px" }}>Who is this for?</h2>
            <p style={{ fontSize: "17px", color: "#4b5563", lineHeight: "1.8" }}>
              We support students heading to Germany who have secured university admission and are in 
              the final stages of their visa process. Our role is to bridge the gap between university 
              acceptance and arrival—helping you feel prepared, informed, and ready to navigate your 
              new environment from the moment you land.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <main ref={servicesRef} style={{ backgroundColor: "#f9fafb", padding: "80px 0" }}>
        
        {/* --- BEFORE YOU FLY & INTEGRATION HUB --- */}
        <section style={{ padding: "0 20px" }}>
          <div style={styles.headerWrapper}>
            <span style={{ fontSize: "32px" }}>🛫</span>
            <h2 style={styles.sectionTitle}>Before You Fly</h2>
          </div>

          <p style={styles.integrationHook}>
            "Master the unwritten rules of German life <span style={{ color: "#2563eb", fontWeight: "700" }}>before</span> you feel like an outsider."
          </p>

          <div style={styles.verticalList}>
            <div>
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>🛒</div>
              <h3 style={styles.moduleTitle}>Grocery Safari</h3>
              <p style={styles.moduleDesc}>
                What do you actually buy when everything looks unfamiliar? And how do you navigate supermarkets in Germany without confusion?<br/>
                We’ll walk you through all of it—before you even get there.
              </p>
            </div>

            <div>
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>🏠</div>
              <h3 style={styles.moduleTitle}>The WG Constitution</h3>
              <p style={styles.moduleDesc}>
                Never shared a flat with strangers before? Unsure who cleans what, or how the kitchen rules work? <br/>
                Don’t worry—we’ll help you settle in without awkward moments.
              </p>
            </div>

            <div>
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>⚖️</div>
              <h3 style={styles.moduleTitle}>The "unwritten rules"</h3>
              <p style={styles.moduleDesc}>
                Unsure about the small but important social norms? From escalator etiquette to punctuality and public behavior. 
                Wondering how to build meaningful connections in a new environment? <br/> 
                We’ll prepare you for it, so you rock at your freshers meet.
              </p>
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

        {/* --- AFTER ARRIVAL --- */}
        <section style={{ padding: "80px 20px 0 20px" }}>
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

        {/* --- EXTENDED SUPPORT --- */}
        <section style={{ padding: "80px 20px 0 20px" }}>
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
      <section id="about" style={{ ...styles.aboutSection, scrollMarginTop: "80px" }}>
        <h2 style={styles.aboutHeader}>About</h2>
        <h3 style={{ fontSize: "22px", color: "#64748b", marginBottom: "30px", fontWeight: "500" }}>
          Built by a student, for students.
        </h3>
        
        <div style={{ maxWidth: "750px", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: "1.8", marginBottom: "15px", fontStyle: "italic" }}>
            "Day Zero was built from lived experience.<br/>
            Having moved to Germany as an international student, I encountered firsthand the uncertainty and friction that define the early days of
            relocation — what to carry, how to navigate unfamiliar systems, and how to find a sense of comfort in a completely new environment.<br/>
            Day Zero exists to bridge that very gap.<br/>
            Our mission is to ensure that every student arrives not just prepared, but confident, supported, and at ease from
            day one — transforming what is often an overwhelming transition into a seamless beginning."
          </p>
          
          <h4 style={{ fontSize: "20px", color: "#1e293b", fontWeight: "700", marginBottom: "40px" }}>
            ~ Gayatrree Paatil
          </h4>
          
          {/* CONTACT SECTION - id="contact" for the Navbar link */}
          <div id="contact" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", scrollMarginTop: "100px" }}>
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