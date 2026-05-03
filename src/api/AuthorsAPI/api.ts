import api from "../axios";
import { ItemSchema } from "./type";
export const createAuthors=async (data:unknown)=>{
    const parsedData=ItemSchema.parse(data);
    const res = await api.post("/admin/author", parsedData);
    return res.data;
}