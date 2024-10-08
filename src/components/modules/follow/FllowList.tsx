import React from "react";

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
          className="p-3 flex items-center justify-between border-b cursor-pointer  dark:hover:bg-gray-500 hover:bg-gray-200"
        >
          <div className="flex items-center">
            <img
              className="rounded-full h-10 w-10"
              src={user.imgUrl}
              alt={user.name}
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
          <button className="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollowList;
