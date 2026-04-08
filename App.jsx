import { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [ingredients, setIngredients] = useState([
    "Chicken breasts",
    "Most of the main spices",
    "Olive oil",
    "Heavy cream",
    "Chicken broth",
    "Parmesan cheese",
    "Spinach",
  ]);

  function addIngredient() {
    if (!text.trim()) return;

    setIngredients([...ingredients, text.trim()]);
    setText("");
  }

  return (
    <div className="page">
      <div className="card">

        <header className="header">
          <span className="logo">👨‍🍳</span>
          <h1>Chef Claude</h1>
        </header>

        <div className="input-section">
          <input
            type="text"
            placeholder="e.g. oregano"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={addIngredient}>
            + Add ingredient
          </button>
        </div>

        <h2>Ingredients on hand:</h2>

        <ul>
          {ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="bottom-box">
          <div>
            <p className="ready">Ready for a recipe?</p>
            <p className="sub">
              Generate a recipe from your list of ingredients.
            </p>
          </div>

          <button className="recipe-btn">
            Get a recipe
          </button>
        </div>

      </div>
    </div>
  );
}
