import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { createPost, getAllPost, getSinglePost } from "../services/postService";
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
export const useGetAllPost = () => {
  return useQuery({
    queryKey: ["GET_ALL_POST"],
    queryFn: async () => await getAllPost(),
  });
};

export const useGetSinglePost = (id: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_POST"],
    queryFn: async () => await getSinglePost(id),
  });
};
