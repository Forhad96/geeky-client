import PeopleYouMayKnow from "../../../../test/PepoleYouKnow";
import TabGroup from "@/src/components/modules/profile/TabGroup";
import { Button } from "@nextui-org/button";

import AGroup from "@/src/components/modules/profile/AGroup";
import { DownArrow } from "../../icons";
import { useState } from "react";

const ProfileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full overflow-hidden dark:bg-dark-background">
      <CoverImage />
      <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
        <ProfileImage />
        <div>
          <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-light-text dark:text-dark-text lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
            Forhad Hossain
          </h1>
          <p className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-light-text dark:text-dark-text ">
            20 Followers
          </p>
          <ProfileActions isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      {isOpen && <PeopleYouMayKnow />}
      <hr />
      <TabGroup />
    </section>
  );
};
export default ProfileHeader;
const CoverImage = () => (
  <img
    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
    alt="User Cover"
    className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
  />
);

const ProfileImage = () => (
  <img
    src="https://www.fakepersongenerator.com/Face/male/male1085444463379.jpg"
    alt="User Profile"
    className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[2rem] sm:bottom-[4rem] xs:bottom-[3rem]"
  />
);

const ProfileActions = ({ isOpen, setIsOpen }) => {
  const handleProfileAction = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div className="flex justify-between items-center gap-3">
      <AGroup />
      <div className="flex items-center justify-center gap-4">
        <Button variant="solid">Add Post</Button>
        <Button>Edit Profile</Button>
        <Button onClick={handleProfileAction} className="mt-0">
          <DownArrow />
        </Button>
      </div>
    </div>
  );
};
