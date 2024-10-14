import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../services/profileService";
import { useUser } from "../context/user.context";
export const useGetMyProfile = () => {
    const {user} = useUser()
  return useQuery({
    queryKey: ["GET_MY_PROFILE"],
    queryFn: async () => await getMyProfile(user?._id),
  });
};
