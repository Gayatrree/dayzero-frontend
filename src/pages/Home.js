import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import heroImage from "../assets/hero.jpg";

const styles = {
  hero: {
    height: "70vh",
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
  sectionTitle: {
    fontSize: "28px",
    color: "#1e293b",
    marginBottom: "30px",
    marginTop: "40px",
    fontWeight: "700",
    borderBottom: "3px solid #2563eb",
    display: "inline-block",
    paddingBottom: "5px"
  },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "60px"
  },
  btn: {
    padding: "16px 32px",
    fontSize: "18px",
    fontWeight: "600",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s"
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

  // Helper function to render a specific category
  const renderCategory = (category, title) => (
    <section style={{ padding: "20px" }}>
      <h2 style={styles.sectionTitle}>{title}</h2>
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
    <div>
      <Navbar />

      <section style={styles.hero}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: "20px", color: "#111", maxWidth: "800px" }}>
          Land in a new country with <br /> <strong>"zero confusion" </strong>
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px", color: "#374151" }}>
          We help students settle from DayZero.
        </p>
        <button onClick={() => navigate("/booking")} style={styles.btn}>
          Explore Services
        </button>
      </section>

      <main style={{ backgroundColor: "#f9fafb", padding: "40px 0" }}>
        {renderCategory("before", "🛫 Before You Fly")}
        {renderCategory("after", "🏠 After Arrival")}
        {renderCategory("extended", "🤝 Extended Support")}
      </main>
    </div>
  );
}

export default Home;