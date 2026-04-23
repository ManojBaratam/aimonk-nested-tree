import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getTrees = () => axios.get(`${API}/tree`);
export const createTree = (data) => axios.post(`${API}/tree`, data);
export const updateTree = (id, data) =>
  axios.put(`${API}/tree/${id}`, data);