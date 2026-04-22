import React, { useState } from "react";
import { InlineWidget } from "react-calendly"; // Ensure you ran 'npm install react-calendly'
import Navbar from "../components/Navbar";

const recipes = [
  {
    id: 1,
    title: "Dal Tadka & Rice",
    ingredients: ["1 cup Moong Dal", "2 cups Water", "Turmeric", "Ghee/Oil", "Cumin seeds"],
    steps: "Boil dal with turmeric and salt. Heat oil/ghee, add cumin seeds until they sizzle, and pour over the dal."
  },
  {
    id: 2,
    title: "Aloo Jeera (Cumin Potatoes)",
    ingredients: ["3 Potatoes (cubed)", "1 tsp Cumin seeds", "Turmeric", "Salt", "Oil"],
    steps: "Sauté cumin in oil. Add cubed potatoes and turmeric. Cover and cook on low heat until tender and crispy."
  },
  {
    id: 3,
    title: "Egg Bhurji (Indian Scramble)",
    ingredients: ["3 Eggs", "1 Onion (chopped)", "1 Tomato", "Green chili", "Turmeric"],
    steps: "Sauté onions and tomatoes. Add spices, then crack eggs into the pan. Stir constantly until fluffy and cooked."
  },
  {
    id: 4,
    title: "One-Pot Khichdi",
    ingredients: ["1/2 cup Rice", "1/2 cup Dal", "Ginger", "Ghee", "Salt"],
    steps: "Pressure cook rice, dal, ginger, and salt with 3 cups of water for 3 whistles. Top with ghee."
  },
  {
    id: 5,
    title: "Masala Maggi (Upgrade)",
    ingredients: ["1 pack Maggi", "Onion", "Frozen Peas/Carrots", "Butter"],
    steps: "Sauté veggies in butter. Add water and Maggi masala. Once boiling, add noodles and cook until dry."
  },
  {
    id: 6,
    title: "Curd Rice (The Comfort Food)",
    ingredients: ["1 cup Cooked Rice", "1/2 cup Yogurt", "Salt", "Mustard seeds (optional)"],
    steps: "Mix soft rice with yogurt and salt. If possible, temper mustard seeds in oil and add on top."
  }
];

function CookingPage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{ padding: "40px", textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", color: "#1e293b", fontWeight: "800" }}>🍳 Survival Cooking Workshop</h1>
        <p style={{ fontSize: "18px", color: "#64748b", marginBottom: "30px" }}>
          Don't survive on cup noodles. Master the basics in just 3 days.
        </p>
        
        {/* Toggle between Button and Calendar */}
        {!showCalendar ? (
          <button 
            onClick={() => setShowCalendar(true)} 
            style={bookingBtn}
          >
            📅 Book your 3-Day Workshop
          </button>
        ) : (
          <div style={{ marginTop: "20px", background: "#fff", padding: "20px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <button 
              onClick={() => setShowCalendar(false)} 
              style={{ marginBottom: "10px", color: "#ef4444", border: "none", background: "none", cursor: "pointer", fontWeight: "600" }}
            >
              ✕ Close Calendar
            </button>
            <InlineWidget 
              url="https://calendly.com/dayzerostudent/30min" // Replace with your actual link
              styles={{ height: '650px' }}
            />
          </div>
        )}

        <h2 style={{ marginTop: "60px", color: "#1e293b" }}>Essential Recipes</h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              onClick={() => setSelectedRecipe(recipe)} 
              style={recipeCard}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 style={{ fontSize: "1.1rem", marginBottom: "10px" }}>{recipe.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "600" }}>View Ingredients & Steps →</p>
            </div>
          ))}
        </div>

        {/* Recipe Detail Modal */}
        {selectedRecipe && (
          <div style={modalOverlay}>
            <div style={modalStyle}>
              <h2 style={{ color: "#1e293b" }}>{selectedRecipe.title}</h2>
              <hr style={{ border: "0.5px solid #eee", margin: "20px 0" }} />
              
              <h4 style={{ textAlign: "left", color: "#2563eb" }}>Ingredients:</h4>
              <ul style={{ textAlign: "left", lineHeight: "1.8" }}>
                {selectedRecipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
              </ul>
              
              <h4 style={{ textAlign: "left", color: "#2563eb", marginTop: "20px" }}>Instructions:</h4>
              <p style={{ textAlign: "left", lineHeight: "1.6", color: "#4b5563" }}>{selectedRecipe.steps}</p>
              
              <button 
                style={closeBtn} 
                onClick={() => setSelectedRecipe(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Updated Styles
const bookingBtn = { 
  padding: "16px 32px", 
  backgroundColor: "#059669", 
  color: "white", 
  borderRadius: "12px", 
  border: "none", 
  cursor: "pointer", 
  fontSize: "18px",
  fontWeight: "700",
  boxShadow: "0 4px 10px rgba(5, 150, 105, 0.2)",
  transition: "0.3s"
};

const recipeCard = { 
  padding: "25px", 
  border: "1px solid #e5e7eb", 
  borderRadius: "16px", 
  cursor: "pointer", 
  width: "220px", 
  backgroundColor: "#fff",
  transition: "transform 0.2s, box-shadow 0.2s",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000
};

const modalStyle = { 
  padding: "30px", 
  backgroundColor: "#fff", 
  borderRadius: "20px", 
  maxWidth: "500px", 
  width: "90%",
  boxShadow: "0 20px 25px rgba(0,0,0,0.1)"
};

const closeBtn = {
  marginTop: "30px",
  padding: "10px 25px",
  backgroundColor: "#1e293b",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600"
};

export default CookingPage;