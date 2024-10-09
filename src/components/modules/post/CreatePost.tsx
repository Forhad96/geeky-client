import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

const CreatePost = () => {
  return (
    <div className="h-28 bg-light-background dark:bg-dark-background p-4 rounded-md">
      <div className="flex items-center gap-2">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Input placeholder="Whats Happening's.." size="lg" className="flex-1" />
      </div>
      <div className="flex items-center justify-end gap-2 mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      </div>
    </div>
  );
};
export default CreatePost;

// import { Feeling, Image, LiveVideo } from "../../icons";

// function CreatePost() {
//   return (
//     <>
//       {/* ADD POST */}
//       <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
//         <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
//           <img
//             src="./images/profile_photo_cat.jpg"
//             alt="Profile picture"
//             className="w-10 h-10 rounded-full"
//           />
//           <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
//             <span>What's on your mind, Can ?</span>
//           </div>
//         </div>
//         <div className="p-2 flex">
//           <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
//             {/* <LiveVideo /> */}
//             <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
//               Live video
//             </span>
//           </div>
//           <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
//             {/* <Image /> */}
//             <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
//               Photo/Video
//             </span>
//           </div>
//           <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
//             {/* <Feeling /> */}
//             <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
//               Life Event
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* END ADD POST */}
//     </>
//   );
// }

// export default CreatePost;