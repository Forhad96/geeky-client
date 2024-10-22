import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../services/profileService";
import { useUser } from "../context/user.context";
import { availableFollow } from "../services/followService";
export const useGetAvailableFollow = () => {
  const { user } = useUser();
  return useQuery({
    queryKey: ["GET_AVAILABLE_FOLLOW"],
    queryFn: async () => await availableFollow(),
  });
};
