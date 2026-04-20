import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import heroImage from "../assets/hero.jpg";

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
    backgroundSize: "contain",
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
    backgroundColor: "#fef3c7", // Soft Beige/Amber
    color: "#92400e",           // Earthy Brown text
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
  }
};

function Home() {
  const navigate = useNavigate();

  const serviceList = [
    // Category: Before you fly
    { title: "Survival Cooking 101", desc: "Master 7 basic meals before you fly abroad", path: "/cooking", category: "before" },
    { title: "Local Transport Guidance", desc: "Step-by-step directions from airport to dorm", path: "/transport", category: "before" },
    { title: "Packing Checklist", desc: "Never forget essentials with our custom list", path: "/packing", category: "before" },
    
    // Category: After arrival
    { title: "Airport Pickup", desc: "Safe pickup from airport to your residence", path: "/booking", category: "after" },
    { title: "Starter Kit Delivery", desc: "Pillow, blanket, and essentials at your door", path: "/starter-kit", category: "after" },
    
    // Category: Extended support
    { title: "Set up Bank Account", desc: "Guidance for Blocked Account and local cards", path: "/bank", category: "extended" },
    { title: "City Registration", desc: "Book your appointment for the Bürgerbüro/City hall", path: "/registration", category: "extended" },
  ];

  // Updated Helper function with centered Pill and Title
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
            <div 
              key={index} 
              onClick={() => navigate(service.path)} 
              style={{ cursor: "pointer" }}
            >
              <ServiceCard title={service.title} description={service.desc} />
            </div>
          ))}
      </div>
    </section>
  );

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Navbar />

      <section style={styles.hero}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: "20px", color: "#111", maxWidth: "900px", fontWeight: "800" }}>
          Land in a new country with <br /> 
          <span style={{ color: "#2563eb" }}>"zero confusion"</span>
        </h1>
        <p style={{ fontSize: "21px", marginBottom: "35px", color: "#4b5563", maxWidth: "600px" }}>
          Moving abroad is hard. We make DayZero easy with expert guidance and essential arrival kits.
        </p>
        <button 
          onClick={() => navigate("/booking")} 
          style={styles.btn}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          Explore Services
        </button>
      </section>

      <main style={{ backgroundColor: "#f9fafb", padding: "60px 0" }}>
        {renderCategory("before", "Before You Fly", "🛫")}
        {renderCategory("after", "After Arrival", "🏠")}
        {renderCategory("extended", "Extended Support", "🤝")}
      </main>
      
      {/* Footer Placeholder for extra polish */}
      <footer style={{ padding: "40px", textAlign: "center", color: "#94a3b8", fontSize: "14px" }}>
        © 2026 DayZero Student Services. Built for international success.
      </footer>
    </div>
  );
}

export default Home;