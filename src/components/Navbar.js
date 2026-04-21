import { Link } from "react-router-dom";
import { useState } from "react";
import { PopupModal } from "react-calendly";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 20px", // Reduced side padding for mobile
        background: "white",
        borderBottom: "1px solid #eee",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        flexWrap: "wrap", // This allows content to wrap to a new line if it hits the edge
        gap: "10px"
      }}
    >
      {/* --- LOGO SECTION --- */}
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <div style={{
          backgroundColor: "#2563eb",
          color: "white",
          width: "32px",
          height: "32px",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          marginRight: "10px",
          fontSize: "18px",
          flexShrink: 0 // Prevents the logo from squishing
        }}>
          D
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: "18px", // Slightly smaller for mobile
            color: "#1e293b", 
            fontWeight: "800",
            letterSpacing: "-0.5px",
            lineHeight: "1" 
          }}>
            Day<span style={{ color: "#2563eb" }}>Zero</span>
          </h2>
          <span style={{ 
            fontSize: "9px", 
            fontWeight: "700", 
            color: "#64748b", 
            letterSpacing: "1px",
            marginTop: "2px"
          }}>
            RELOCATION, SIMPLIFIED
          </span>
        </div>
      </Link>

      {/* --- NAVIGATION LINKS --- */}
      <div style={{ 
        display: "flex", 
        gap: "15px", // Tighter gap for mobile
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap" // Allows links to wrap if necessary
      }}>
        <Link to="/" style={linkStyle}>Home</Link>
        
        <button onClick={() => handleScroll("about")} style={buttonLinkStyle}>
          About
        </button>

        <button onClick={() => handleScroll("contact")} style={buttonLinkStyle}>
          Contact
        </button>
        
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            ...linkStyle,
            backgroundColor: "#2563eb",
            color: "white",
            padding: "6px 12px", // Slightly smaller padding
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            outline: "none",
            fontSize: "13px", // Smaller text for mobile
            whiteSpace: "nowrap" // Prevents the button text itself from breaking
          }}
        >
          Book a Call
        </button>

        <PopupModal
          url="https://calendly.com/gayatrreepaatil/30min"
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '2563eb',
            textColor: '4b5563'
          }}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById("root")}
        />
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#64748b",
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "'Inter', sans-serif"
};

const buttonLinkStyle = {
  background: "none",
  border: "none",
  color: "#64748b",
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "'Inter', sans-serif",
  cursor: "pointer",
  padding: 0
};

export default Navbar;