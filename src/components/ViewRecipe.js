import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchRecipe } from "../api/api";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw } from "draft-js";
import { useNavigate } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Header from "./Header";
import { Buffer } from "buffer";
import "./ViewRecipe.css";

function ViewRecipe() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (recipe) {
      // Convert raw content to EditorState object
      const contentState = convertFromRaw(JSON.parse(recipe.data.description));
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
      
      //set image data
      setImage(
        `data:${recipe.data.image.contentType};base64,${Buffer.from(recipe.data.image.data).toString('base64')}`
      );
    }
  }, [recipe]);

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  return (
    <div className="view">
      <Header heading={recipe.data.recipeName} />
      <button className="btn addRecipe__backBtn" onClick={() => navigate("/")}>
        <HomeOutlinedIcon />
        <br />
        Go Back
      </button>
      <div className="view__content">
        <img
          src={image}
          alt={recipe.data.image.name}
        />
        <div className="view__ingredients">
          <h5>Ingredients</h5>
          <form>
            {recipe.data.ingredients.map((ingredient, index) => {
              return (
                <div className="view__ingredient" key={index}>
                  <input type="checkbox" value={ingredient} />
                  <label className="strikethrough">{ingredient}</label>
                </div>
              );
            })}
          </form>
        </div>

        <div className="view__description">
          <h5>Description</h5>
           <Editor
            editorState={editorState}
            readOnly={true}
            toolbarHidden
            editorClassName="editor-class"
          />
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;
