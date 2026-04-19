import React, { useState } from "react";
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

  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>🍳 Survival Cooking Workshop</h1>
        <p>Don't survive on cup noodles. Learn the basics in 7 days.</p>
        
        <button style={bookingBtn}>Book 7-Day Workshop</button>

        <h2 style={{ marginTop: "50px" }}>Essential Recipes</h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
          {recipes.map((recipe) => (
            <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)} style={recipeCard}>
              <h3>{recipe.title}</h3>
              <p>Click to view recipe</p>
            </div>
          ))}
        </div>

        {/* Recipe Detail Modal/View */}
        {selectedRecipe && (
          <div style={modalStyle}>
            <h3>{selectedRecipe.title}</h3>
            <h4>Ingredients:</h4>
            <ul style={{ textAlign: "left" }}>
              {selectedRecipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
            <h4>Instructions:</h4>
            <p style={{ textAlign: "left" }}>{selectedRecipe.steps}</p>
            <button onClick={() => setSelectedRecipe(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Styles
const bookingBtn = { padding: "15px 30px", backgroundColor: "#059669", color: "white", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "18px" };
const recipeCard = { padding: "20px", border: "1px solid #ddd", borderRadius: "12px", cursor: "pointer", width: "200px", backgroundColor: "#fff" };
const modalStyle = { marginTop: "30px", padding: "20px", backgroundColor: "#f3f4f6", borderRadius: "12px", maxWidth: "500px", margin: "30px auto" };

export default CookingPage;