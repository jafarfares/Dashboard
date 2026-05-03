import api from "../axios";
import { ItemSchema } from "./type";
export const createAuthors=async (data:unknown)=>{
    const parsedData=ItemSchema.parse(data);
    console.log("Token:", localStorage.getItem("token"));
    const res = await api.post("/admin/author", parsedData);
    return res.data;
}