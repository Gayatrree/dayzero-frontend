
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import heroImage from "../assets/hero.jpg";

// Moving styles to a constant or CSS file makes the component cleaner
const styles = {
  hero: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#111",
    backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${heroImage})`,
    backgroundSize: "contain", // 'cover' usually looks better for hero sections than 'contain'
    backgroundPosition: "center",
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

  // In a smart stack, this data would eventually come from your AI backend
 const serviceList = [
  { title: "Airport Pickup", desc: "Safe pickup from airport", path: "/booking" },
  { title: "Survival Cooking 101", desc: "Master 7 basic meals before you fly abroad", path: "/cooking" }
  { title: "Local Transport Guidance", desc: "Step-by-step directions from the airport to your dorm",path: "/transport" },
  { title: "Packing Checklist", desc: "Never forget essentials", path: "/packing" }, // New Path!
];

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
          Book Your Arrival
        </button>
      </section>

      <section style={{ padding: "80px 20px", backgroundColor: "#f9fafb", textAlign: "center" }}>
        <h2 style={{ marginBottom: "40px", fontSize: "32px" }}>Our Smart Services</h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {serviceList.map((service, index) => (
  <div key={index} onClick={() => navigate(service.path)} style={{ cursor: "pointer" }}>
    <ServiceCard 
      title={service.title} 
      description={service.desc} 
    />
  </div>
))}
        </div>
      </section>
    </div>
  );
}

export default Home;