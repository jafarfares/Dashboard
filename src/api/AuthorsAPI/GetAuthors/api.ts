// api/authors.js
import api from "#/api/axios";

export const getAuthors = async (page = 1, perPage = 10) => {
  const res = await api.get(`/admin/author?page=${page}&per_page=${perPage}`);
  
  return res.data;
};