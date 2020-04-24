import axios from "axios";

const api = axios.create({
  baseURL: "https://dontpanicga.herokuapp.com",
});

export const getAllWords = async () => {
  const resp = await api.get("/word");
  console.log("getAllWords -> resp", resp)
  return resp.data;
};
export const getAllUsers = async () => {
  const resp = await api.get("/user");
  console.log("getAllUsers -> resp", resp)
  return resp.data;
};
export const createUser = async (user) => {
  const resp = await api.post("/user/create", user);
  console.log("Success in creating new user");
  return resp.data;
};
export const deleteUser = async (id) => {
  const resp = await api.delete(`/user/delete/${id}`);
  console.log("Successfully deleted user.");
  return resp.data;
};