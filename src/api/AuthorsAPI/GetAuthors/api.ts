// api/authors.js
import api from "#/api/axios";
export const getAuthors = async (page = 1) => {
  const res = await api.get(`/admin/author?page=${page}`);
  return res.data;
};