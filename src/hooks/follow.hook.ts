import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { availableFollow, createFollow } from "../services/followService";
import { toast } from "sonner";
import { IFollow } from "../types";


export const useGetAvailableFollow = () => {
  return useQuery({
    queryKey: ["GET_AVAILABLE_FOLLOW"],

    queryFn: async () => await availableFollow(),
  });
};
export const useCreateFollow = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, IFollow>({
    mutationKey: ["CREATE_FOLLOW"],
    mutationFn: async (followData) => await createFollow(followData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_AVAILABLE_FOLLOW"] });
      toast.success("User followed successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
