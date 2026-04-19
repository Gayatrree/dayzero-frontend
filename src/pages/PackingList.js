import React, { useState } from "react";
import Navbar from "../components/Navbar";

function PackingList() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getAIList = async () => {
    if (!city) return alert("Please enter a city!");
    setLoading(true);
    
    try {
      // Talking to your Node.js Backend
      const response = await fetch("https://dayzero-backend-i0w0.onrender.com/api/packing-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: city }),
      });
      const data = await response.json();
      setResult(data.packinglist); // Saving the AI's answer
    } catch (error) {
      setResult("Error connecting to the brain (Backend).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Smart Packing Assistant</h2>
        <p>Tell us where you are moving, and our AI will suggest a list.</p>
        
        <input 
          type="text" 
          placeholder="e.g. New York, Berlin, Mumbai" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "12px", width: "250px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button onClick={getAIList} style={{ padding: "12px 20px", marginLeft: "10px", cursor: "pointer" }}>
          {loading ? "Asking AI..." : "Generate List"}
        </button>

        {result && (
          <div style={{ marginTop: "40px", textAlign: "left", maxWidth: "600px", margin: "40px auto", padding: "20px", background: "#f4f4f4", borderRadius: "10px" }}>
            <h3>Your AI-Generated List:</h3>
            <p style={{ whiteSpace: "pre-wrap" }}>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PackingList;