import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuthors } from "./api";

export const useCreateAuthor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAuthors,
    onSuccess: (data) => {
    console.log("✅ Author created:", data);
      queryClient.invalidateQueries({ queryKey: ["authors"] });
    },
    onError: (error) => {
      console.error("❌ Error creating author:", error);
    },
  });
};