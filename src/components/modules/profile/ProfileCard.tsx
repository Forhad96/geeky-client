"use client";
import { useGetMyProfile } from "@/src/hooks/myProfile.hook";
import { Divider } from "@nextui-org/divider";
import React from "react";
import Loading from "../../ui/Loading";
import { useGetFollowCount } from "@/src/hooks/follow.hook";

// Define a type for the user profile data
interface UserProfile {
  _id: string;
  name: string;
  username: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  isVerified: boolean;
  isPremiumUser: boolean;
  followers: any[];
  following: string[];
  posts: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ProfileCard: React.FC = () => {
  const { data: profileData, isLoading: isProfileLoading } = useGetMyProfile();
  const { data: followData, isLoading: isFollowDataLoading } =
    useGetFollowCount();

  const userProfile = profileData?.data as UserProfile | undefined;
  const followCounts = followData?.data as {
    followers: string;
    following: string;
  };

  if (isProfileLoading && isFollowDataLoading) return <Loading />;

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto dark:bg-dark-background bg-light-background shadow-2xl mb-8 rounded-lg text-gray-900">
      <div className="rounded-t-lg h-28 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto size-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-28"
          src={userProfile?.profilePhoto}
          alt={`${userProfile?.name} Photo`}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold dark:text-white">{userProfile?.name}</h2>
        <p className="dark:text-gray-500">@{userProfile?.username}</p>
        <p className="text-gray-500 dark:text-gray-300">{userProfile?.email}</p>
      </div>

      <ul className="py-4 mt-2 border-y border-y-gray-400 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <div className="font-bold dark:text-white">
            {followCounts?.following}
          </div>
          <div className="dark:text-gray-300">Following</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <div className="font-bold dark:text-white">
            {followCounts?.followers}
          </div>
          <div className="dark:text-gray-300">Followers</div>
        </li>
      </ul>
      <div className="p-2 mx-2 mt-2">
        <button className="w-1/2 block mx-auto rounded-full text-cPrimary hover:shadow-lg font-semibold px-6 py-2">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
