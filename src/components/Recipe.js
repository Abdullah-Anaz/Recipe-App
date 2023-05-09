import React, { useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ModalDialog from "./ModalDialog";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteRecipe } from "../api/api";
import { useQueryClient } from "@tanstack/react-query";
import "./Recipe.css";

function Recipe({ id, title, description, image }) {
  const [isShow, invokeModal] = useState(false);
  const [recipeDescription, setRecipeDescription] = useState("");

  const queryClient = useQueryClient();

  const initModal = () => {
    return invokeModal(!isShow);
  };

  useEffect(() => {
    const recipeDescriptionJSON = JSON.parse(description);
    setRecipeDescription(recipeDescriptionJSON.blocks[0].text);
  }, [description]);

  const deleteRecipeMutation = useMutation({
    mutationFn: deleteRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
    },
    onError: () => {
      alert("Failed to delete recipe. Please try again.");
    },
  });

  const handleDelete = (id) => {
    deleteRecipeMutation.mutate(id);
  };

  let navigate = useNavigate();
  const handleEdit = (id) => {
    let path = `edit/${id}`;
    navigate(path);
  };

  const handleCardClick = (id) => {
    let path = `recipe/${id}`;
    navigate(path);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="recipe">
      <div className="card">
        <img
          src={`http://localhost:4000/${image}`}
          className="card-img-top"
          alt={`${image}`}
          onClick={(e) => handleCardClick(id)}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{truncate(recipeDescription, 75)}</p>
          <div className="recipe__cardActions">
            <DeleteOutlineOutlinedIcon
              className="recipe__cardDelete"
              onClick={(e) => initModal()}
            />
            <EditOutlinedIcon
              className="recipe__cardEdit"
              onClick={(e) => handleEdit(id)}
            />
          </div>
        </div>
      </div>

      <ModalDialog
        isShow={isShow}
        initModal={initModal}
        id={id}
        title={title}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Recipe;
