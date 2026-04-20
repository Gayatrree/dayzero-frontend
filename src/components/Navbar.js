import { Link } from "react-router-dom";
import { useState } from "react";
import { PopupModal } from "react-calendly";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "white",
        borderBottom: "1px solid #eee",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000
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
          marginRight: "12px",
          fontSize: "18px"
        }}>
          D
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: "22px", 
            color: "#1e293b", 
            fontWeight: "800",
            letterSpacing: "-0.5px",
            lineHeight: "1" 
          }}>
            Day<span style={{ color: "#2563eb" }}>Zero</span>
          </h2>
          <span style={{ 
            fontSize: "10px", 
            fontWeight: "700", 
            color: "#64748b", 
            letterSpacing: "1.2px",
            marginTop: "2px"
          }}>
            RELOCATION, SIMPLIFIED
          </span>
        </div>
      </Link>

      {/* --- NAVIGATION LINKS --- */}
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/packing" style={linkStyle}>Packing List</Link>
        
        {/* Changed from Link to a Button for Calendly Popup */}
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            ...linkStyle,
            backgroundColor: "#2563eb",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            outline: "none"
          }}
        >
          Book Now
        </button>

        {/* Calendly Popup Logic */}
        <PopupModal
          url="https://calendly.com/gayatrreepaatil/30min" // Replace with your discovery call link
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
  fontWeight: "500",
  fontSize: "15px",
  fontFamily: "'Inter', sans-serif"
};

export default Navbar;