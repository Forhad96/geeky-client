import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAvailableFollow,
  createFollow,
  getFollowCount,
} from "../services/followService";
import { toast } from "sonner";
import { IFollow } from "../types";


export const useGetAvailableFollow = () => {
  return useQuery({
    queryKey: ["GET_AVAILABLE_FOLLOW"],

    queryFn: async () => await getAvailableFollow(),
  });
};
export const useGetFollowCount = () => {
  return useQuery({
    queryKey: ["GET_FOLLOW_COUNT"],

    queryFn: async () => await getFollowCount(),
  });
};
export const useCreateFollow = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, IFollow>({
    mutationKey: ["CREATE_FOLLOW"],
    mutationFn: async (followData) => await createFollow(followData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_AVAILABLE_FOLLOW", ],
      });
      queryClient.invalidateQueries({
        queryKey: ["GET_FOLLOW_COUNT"],
      });
      toast.success("User followed successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
