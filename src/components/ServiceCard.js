import { FaPlaneArrival, FaCity, FaSuitcase, FaQuestionCircle } from "react-icons/fa";

// Map titles to icons - very easy to extend!
const iconMap = {
  "Airport Pickup": <FaPlaneArrival size={30} color="#2563eb" />,
  "City Orientation": <FaCity size={30} color="#2563eb" />,
  "Packing Checklist": <FaSuitcase size={30} color="#2563eb" />,
};

function ServiceCard({ title, description }) {
  // Fallback to a question mark if the title doesn't match
  const icon = iconMap[title] || <FaQuestionCircle size={30} color="#94a3b8" />;

  return (
    <div
      style={{
        border: "1px solid #eee",
        padding: "25px",
        borderRadius: "12px",
        width: "260px",
        background: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        textAlign: "center",
        transition: "transform 0.2s", // Subtle hover effect
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={{ marginBottom: "15px" }}>{icon}</div>
      <h3 style={{ fontSize: "1.25rem", color: "#1f2937", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: "1.5" }}>{description}</p>
    </div>
  );
}

export default ServiceCard;