import axios from "axios";

const API = "https://aimonk-nested-tree.onrender.com";
export const getTrees = () => axios.get(`${API}/tree`);
export const createTree = (data) => axios.post(`${API}/tree`, data);
export const updateTree = (id, data) =>
  axios.put(`${API}/tree/${id}`, data);