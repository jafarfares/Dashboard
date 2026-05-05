import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "#/api/AuthorsAPI/GetAuthors/api";

export const useAuthors = (page:number,perPage:number)=>{
    
    return useQuery({
       queryKey: ["authors", page,perPage], 
       queryFn: () => getAuthors(page, perPage),
       //keepPreviousData: true, 
       placeholderData: (prev) => prev
    })
}