import React from "react";
import Header from "./Header";
import Form from "./Form";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipe } from "../api/api";

import "./EditRecipe.css";

function EditRecipe() {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: recipe,
    error,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipe(id),
  });

  let navigate = useNavigate();
  const handleBackBtnClick = () => {
    let path = `/`;
    navigate(path);
  };

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  return (
    <div className="editRecipe">
      <Header heading={"Let's Add a New Recipe"} />

      <button className="btn editRecipe__backBtn" onClick={handleBackBtnClick}>
        <HomeOutlinedIcon />
        <br />
        Go Back
      </button>

      <div className="editRecipe__form">
        <Form
          id={recipe.data._id}
          recipeTitle={recipe.data.recipeName}
          recipeCategory={recipe.data.category}
          recipeIngredients={recipe.data.ingredients}
          description={JSON.parse(recipe.data.description)}
          recipeImage={recipe.data.image}
          type={"edit"}
        />
      </div>
    </div>
  );
}

export default EditRecipe;
