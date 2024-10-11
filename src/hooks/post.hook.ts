import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createPost } from "../services/postService";
import { IPost } from "../types";


export const useCreatePost = () => {
  return useMutation<any, Error, IPost>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
