import React from "react";
import Header from "./Header";
import Form from "./Form";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
import "./AddRecipe.css";

function AddRecipe() {
  const defaultContent = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      },
    ],
  };

  let navigate = useNavigate();

  const handleBackBtnClick = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div className="addRecipe">
      <Header heading={"Let's Add a New Recipe"} />

      <button className="btn addRecipe__backBtn" onClick={handleBackBtnClick}>
        <HomeOutlinedIcon />
        <br />
        Go Back
      </button>

      <div className="addRecipe__form">
        <Form
          recipeTitle={""}
          recipeCategory={"Appetizers & Snacks"}
          recipeIngredients={[]}
          description={defaultContent}
          type={"add"}
        />
      </div>
    </div>
  );
}

export default AddRecipe;
