import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "#/api/AuthorsAPI/GetAuthors/api";
export const useAuthors = (page:number)=>{
    
    return useQuery({
       queryKey: ["authors", page], 
       queryFn: () => getAuthors(page),
       //keepPreviousData: true, 
       placeholderData: (prev) => prev
    })
}