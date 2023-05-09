import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddRecipe, updateRecipe } from "../api/api";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import categoriesData from "../categories";
import "./Form.css";

const RecipeForm = ({
  id,
  recipeTitle,
  recipeCategory,
  recipeIngredients,
  description,
  recipeImage,
  type,
}) => {
  const [title, setTitle] = useState(recipeTitle);
  const [category, setCategory] = useState(recipeCategory) 
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredients] = useState(recipeIngredients);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(description))
  );
  const [image, setImage] = useState(recipeImage);
  const queryClient = useQueryClient();

  const categories = categoriesData;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleIngredientInputChange = (e) => {
    setIngredientInput(e.target.value);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ingredientInput]);
    setIngredientInput("");
  };

  const handleDeleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.type === "image/png" || file.type === "image/jpeg") {
      setImage(file);
    } else {
      alert("Please upload a PNG or JPEG image.");
    }
  };

  let navigate = useNavigate();

  const createPostMutation = useMutation({
    mutationFn: AddRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      alert("Recipe added successfully!");
      navigate("/");
    },
    onError: () => {
      alert("Failed to add recipe. Please try again.");
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: updateRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      alert("Recipe updated successfully!");
      navigate(`/recipe/${id}`);
    },
    onError: () => {
      alert("Failed to update recipe. Please try again.");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission logic here
    // Convert the editor state to raw content
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);

    // Create a new form data object
    const formData = new FormData();
    formData.append("name", title);
    formData.append("category", category);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    formData.append("description", JSON.stringify(rawContentState));
    formData.append("image", image);

    if (type === "add") {
      createPostMutation.mutate(formData);
    } else if (type === "edit") {
      formData.append("id", id);
      updatePostMutation.mutate(formData);
    }
  };

  console.log(ingredients);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Title: <br />
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </label>
      <br />
      <label>
        Category: <br />
        <select onChange={handleCategoryChange} required>
          <option value="Appetizers & Snacks" selected>Appetizers & Snacks</option>
          {categories.map(({ category }, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Ingredients: <br />
        <input
          id="newIngredient"
          value={ingredientInput}
          onChange={handleIngredientInputChange}
        />
        <AddIcon
          className="form__ingredientAdd"
          onClick={handleAddIngredient}
        />
      </label>
      <br />
      <ul className="form__ingredientsList">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <div className="form__ingredientListItem">{ingredient}</div>
            <div
              className="form__ingredientsListDeleteButton"
              onClick={() => handleDeleteIngredient(index)}
            >
              <DeleteOutlineOutlinedIcon />
            </div>
          </li>
        ))}
      </ul>
      <br />

      <label>
        Description: <br />
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </label>
      <br />
      <label>
        Image: <br />
        <input
          type="file"
          accept="image/png,image/jpeg"
          onChange={handleImageChange}
        />
      </label>
      <br />
      <button className="btn btn-primary mt-5" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RecipeForm;
