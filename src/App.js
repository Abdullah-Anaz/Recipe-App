import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";
import ViewRecipe from "./components/ViewRecipe";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/recipe/:id" element={<ViewRecipe />} />
        <Route path="/dashboard" element={<ComingSoon />} />
        <Route path="/favourites" element={<ComingSoon />} />
        <Route path="/settings" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
