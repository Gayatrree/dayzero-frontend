import { Link } from "react-router-dom";
import logoIcon from '../assets/dayzerologo.jpg';

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "white",
        borderBottom: "1px solid #eee",
        alignItems: "center", // Keeps everything centered vertically
        position: "sticky",    // Keeps the nav at the top when scrolling
        top: 0,
        zIndex: 1000
      }}
    >
      {/* --- LOGO SECTION --- */}
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <div style={{
          backgroundColor: "#2563eb", // Professional Blue
          color: "white",
          width: "32px",
          height: "32px",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          marginRight: "10px",
          fontSize: "18px"
        }}>
          D
        </div>
        <h2 style={{ 
  margin: 0, 
  fontSize: "22px", 
  color: "#1e293b", 
  fontWeight: "800",
  letterSpacing: "-0.5px",
  display: "flex",       // Added to align text and image
  alignItems: "center"   // Keeps the globe level with the letters
}}>
  Day
  <span style={{ color: "#2563eb", display: "flex", alignItems: "center" }}>
    Zer
    <img 
  src={logoIcon} 
  alt="o" 
  style={{ 
    height: "22px", 
    width: "auto",
    marginLeft: "2px",
    display: "inline-block"
  }} 
/>
  </span>
</h2>
      </Link>

      {/* --- NAVIGATION LINKS --- */}
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/packing" style={linkStyle}>Packing List</Link>
        <Link to="/booking" style={{
          ...linkStyle,
          backgroundColor: "#2563eb",
          color: "white",
          padding: "8px 16px",
          borderRadius: "6px"
        }}>
          Book Now
        </Link>
      </div>
    </nav>
  );
}

// Simple reusable style for links
const linkStyle = {
  textDecoration: "none",
  color: "#64748b",
  fontWeight: "500",
  fontSize: "15px"
};

export default Navbar;