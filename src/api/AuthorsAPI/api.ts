import api from "../axios";

export const createAuthors=async (data:any)=>{
    const res = await api.post("/admin/author", data);
    return res.data;
}