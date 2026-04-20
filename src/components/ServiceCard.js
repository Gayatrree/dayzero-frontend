import { 
  FaPlaneArrival, 
  FaSuitcase, 
  FaQuestionCircle, 
  FaBus,      // New Icon for Transport
  FaUtensils,
  FaBox,             // Added this
  FaUniversity,      // Added this
  FaFileSignature    // Added this  // New Icon for Cooking
} from "react-icons/fa";

// Map titles to icons
const iconMap = {
  "Airport Pickup": <FaPlaneArrival size={30} color="#2563eb" />,
  "Local Transport Guidance": <FaBus size={30} color="#2563eb" />, // Matches the title in Home.js
  "Survival Cooking 101": <FaUtensils size={30} color="#2563eb" />, // Matches the title in Home.js
  "Packing Checklist": <FaSuitcase size={30} color="#2563eb" />,
  "Starter Kit Delivery": <FaBox size={30} color="#2563eb"/>,
  "Set up Bank Account": <FaUniversity size={30} color="#2563eb"/>,
  "City Registration": <FaFileSignature size={30} color="#2563eb" />,
};

function ServiceCard({ title, description }) {
  // The icon lookup happens here based on the title prop
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
        transition: "transform 0.2s",
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