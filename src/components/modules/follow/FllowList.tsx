import React from "react";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";

const FollowList = () => {
  const users = [
    {
      name: "Jane Doe",
      username: "@jane",
      imgUrl: "https://loremflickr.com/g/600/600/girl",
    },
    {
      name: "John Doe",
      username: "@john",
      imgUrl: "https://loremflickr.com/g/600/600/boy",
    },
    {
      name: "Paris",
      username: "@paris",
      imgUrl: "https://loremflickr.com/g/600/600/paris",
    },
  ];

  return (
    <div className="rounded-2xl shadow-2xl dark:bg-dark-background bg-light-background">
      {users.map((user, index) => (
        <div
          key={index}
          className="p-3 flex items-center justify-between cursor-pointer dark:hover:bg-light-text hover:bg-gray-200"
        >
          <div className="flex items-center">
            {/* Use NextUI Avatar component */}
            <Avatar
              src={user.imgUrl}
              alt={user.name}
              radius="full"
              className="h-10 w-10"
            />
            <div className="ml-2 flex flex-col">
              <div className="leading-snug text-sm dark:text-white text-gray-900 font-bold">
                {user.name}
              </div>
              <div className="leading-snug text-xs dark:text-gray-300 text-gray-600">
                {user.username}
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
