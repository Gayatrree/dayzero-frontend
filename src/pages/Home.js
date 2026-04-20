import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Added icons for contact
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import heroImage from "../assets/hero.jpg";
import yourphoto from "../assets/Photograph.jpg";

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
  sectionHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px",
    marginTop: "40px",
  },
  categoryPill: {
    backgroundColor: "#fef3c7", 
    color: "#92400e",           
    padding: "6px 20px",
    borderRadius: "50px",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
  },
  sectionTitle: {
    fontSize: "36px",
    color: "#1e293b",
    margin: "0",
    fontWeight: "800",
    letterSpacing: "-0.5px"
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
  profileImage: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "25px",
    border: "5px solid #f8fafc",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2e8f0"
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

function Home() {
  const navigate = useNavigate();

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
      <div style={styles.sectionHeaderContainer}>
        <div style={styles.categoryPill}>
          <span>{emoji}</span> {category.toUpperCase()} TIMELINE
        </div>
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
          Moving abroad is hard. We make DayZero easy with expert guidance and essential arrival kits.
        </p>
        <button onClick={() => navigate("/booking")} style={styles.btn}>
          Explore Services
        </button>
      </section>

      {/* SERVICES SECTION */}
      <main style={{ backgroundColor: "#f9fafb", padding: "60px 0" }}>
        {renderCategory("before", "Before You Fly", "🛫")}
        {renderCategory("after", "After Arrival", "🏠")}
        {renderCategory("extended", "Extended Support", "🤝")}
      </main>

      {/* ABOUT THE FOUNDER SECTION */}
      <section style={styles.aboutSection}>
        <div style={styles.categoryPill}>👋 MEET THE FOUNDER</div>
        <h2 style={styles.sectionTitle}>Built by a student, for students.</h2>
        
        <div style={{ maxWidth: "750px", marginTop: "40px", display: "flex", 
          flexDirection: "column", 
          alignItems: "center",  // Centers items horizontally inside the column
          justifyContent: "center",
          margin: "0 auto" }}>
          <div style={styles.profileImage}>
             {/* Replace the span below with <img src={yourPhoto} style={{width: '100%', borderRadius: '50%'}} /> later */}
            <img 
  src={yourphoto} 
  alt="Gayatrree Paatil" 
  style={{
    width: '100%', 
    height: '100%',     // Ensures it fills the circle
    borderRadius: '50%', 
    objectFit: 'cover',   // CRITICAL: Crops the image to a circle without stretching your face
    display: 'block'
  }} 
/>
          </div>
          
          <h3 style={{ fontSize: "24px", color: "#1e293b", marginBottom: "15px" }}>Gayatrree Paatil</h3>
          
          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: "1.7", marginBottom: "30px" }}>
            {/* Write your amazing story here! */}
            "I created DayZero to solve the real-world challenges I faced as an international student. 
            Our mission is to ensure every student feels supported, prepared, and welcomed from the 
            moment they step off the plane."
          </p>
          
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