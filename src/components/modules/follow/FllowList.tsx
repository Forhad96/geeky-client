"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { useGetAvailableFollow } from "@/src/hooks/availableFollow.hook";
import Loading from "../../ui/Loading";
export interface TUser {
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
  following: any[];
  posts: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const FollowList = () => {
  const { data, isLoading } = useGetAvailableFollow();
  if (isLoading) <Loading />;
  const followList = data?.data as TUser[];
  return (
    <div className="rounded-2xl shadow-2xl max-h-[500px] overflow-scroll dark:bg-dark-background bg-light-background">
      {followList?.map((user, index) => (
        <div
          key={index}
          className="p-3 flex items-center justify-between cursor-pointer dark:hover:bg-light-text hover:bg-gray-200"
        >
          <div className="flex items-center">
            {/* Use NextUI Avatar component */}
            <Avatar
              src={user?.profilePhoto}
              alt={user?.name}
              radius="full"
              className="h-10 w-10"
            />
            <div className="ml-2 flex flex-col">
              <div className="leading-snug text-sm dark:text-white text-gray-900 font-bold">
                {user?.name}
              </div>
              <div className="leading-snug text-xs dark:text-gray-300 text-gray-600">
                {user?.username}
              </div>
            </div>
          </div>
          {/* Use NextUI Button component */}
          <Button
            color="primary"
            variant="bordered"
            className="h-8 px-3 text-md font-bold text-blue-400 rounded-full"
            radius="full"
          >
            Follow
          </Button>
        </div>
      ))}
    </div>
  );
};

export default FollowList;
