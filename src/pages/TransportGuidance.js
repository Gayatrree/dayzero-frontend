import React, { useState } from "react";
import Navbar from "../components/Navbar";

function TransportGuidance() {
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("Frankfurt Airport (FRA)");
  const [guide, setGuide] = useState("");
  const [loading, setLoading] = useState(false);

  const getTransportInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/transport-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ origin, destination }),
      });
      const data = await response.json();
      setGuide(data.guide);
    } catch (error) {
      setGuide("Error connecting to the transport server.");
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
        <h1>🚇 Local Transport Guidance</h1>
        <p>Find your way from the airport to your university safely.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <label>Starting Point:</label>
          <select value={origin} onChange={(e) => setOrigin(e.target.value)} style={inputStyle}>
            <option>Frankfurt Airport (FRA)</option>
            <option>Munich Airport (MUC)</option>
          </select>

          <label>Destination (University or Address):</label>
          <input 
            type="text" 
            placeholder="e.g. Hochschule Ravensburg Weingarten" 
            style={inputStyle}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <button onClick={getTransportInfo} style={btnStyle}>
            {loading ? "Calculating Route..." : "Get Directions"}
          </button>
        </div>

        {guide && (
          <div 
            style={resultContainerStyle} 
            dangerouslySetInnerHTML={{ __html: guide }} 
          />
        )}
      </div>
    </div>
  );
}

// Simple styles
const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #ccc" };
const btnStyle = { padding: "12px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" };
const resultContainerStyle = { marginTop: "30px", padding: "20px", border: "1px solid #eee", borderRadius: "12px", backgroundColor: "#f9fafb", lineHeight: "1.6" };

export default TransportGuidance;