import React, { useState } from "react";
import Navbar from "../components/Navbar";

const recipes = [
  {
    id: 1,
    title: "Dal Tadka & Rice",
    ingredients: ["1 cup Yellow Moong Dal", "2 cups Water", "1 tsp Turmeric", "1 tbsp Ghee", "1 tsp Cumin seeds"],
    steps: "1. Pressure cook dal with water and turmeric. 2. In a small pan, heat ghee and add cumin. 3. Pour over dal and serve with boiled rice."
  },
  {
    id: 2,
    title: "One-Pot Pasta",
    ingredients: ["100g Pasta", "Tomato Sauce", "Garlic", "Salt", "Olive Oil"],
    steps: "1. Boil pasta. 2. Sauté garlic in oil. 3. Mix sauce and pasta together."
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