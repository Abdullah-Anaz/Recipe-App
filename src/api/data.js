import axios from "../axios";

export async function fetchRecipes(category) {
  const response = await axios.get(`/retrieve/${category}`);
  return response;
}

export async function fetchRecipe(id) {
  const response = await axios.get(`/recipe/${id}`);
  return response;
}

export async function AddRecipe(body) {
  const response = await axios.post("/add", body);
  return response;
}

export async function updateRecipe(body) {
  const response = await axios.post("/update", body);
  return response;
}

export async function deleteRecipe(id) {
  const response = await axios.delete(`/delete/${id}`);
  return response;
}
