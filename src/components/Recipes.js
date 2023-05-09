import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Header from "./Header";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../api/api";
import categoriesData from "../categories";
import TapasIcon from "@mui/icons-material/Tapas";
import "./Recipes.css";
import { Icon } from "@mui/material";

function Recipes() {
  const [category, setCategory] = useState("Appetizers & Snacks");
  const [firstRender, setFirstRender] = useState(true);

  const [categories] = useState(categoriesData);

  const {
    isLoading,
    isError,
    data: recipes,
    error,
    refetch,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => fetchRecipes(category),
  });

  useEffect(() => {
    if (!firstRender) {
      refetch();
    }
  }, [category]);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  const handleCategoryChange = (newCategory, className) => {
    setCategory(newCategory);

    document
      .querySelector(".category__active")
      .classList.remove("category__active");
    document.querySelector(`.${className}`).classList.add("category__active");
  };

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  return (
    <div className="recipes">
      <Header heading={"Your Recipe's"} />

      <div className="recipes__body">
        <div className="recipes__categories">
          <button
            className="btn AppetizersAndSnacks category__active"
            onClick={() =>
              handleCategoryChange("Appetizers & Snacks", "AppetizersAndSnacks")
            }
          >
            <div className="recipes__categoryIcon">
              <Icon>
                <TapasIcon />
              </Icon>
            </div>
            Appetizers & Snacks
          </button>
          {categories.map(({ category, className, icon }, index) => (
            <button
              key={index}
              className={`btn ${className}`}
              onClick={() => handleCategoryChange(category, className)}
            >
              <div className="recipes__categoryIcon">{icon}</div>
              {category}
            </button>
          ))}
        </div>

        <div className="recipes__items">
          {recipes.data.map(({ _id, recipeName, description, image }) => (
            <Recipe
              id={_id}
              title={recipeName}
              description={description}
              image={image}
              key={_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
