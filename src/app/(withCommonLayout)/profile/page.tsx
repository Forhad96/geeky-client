import FollowList from "@/src/components/modules/follow/FllowList";
import CreatePost from "@/src/components/modules/post/CreatePost";
import PostCard from "@/src/components/modules/post/PostCard";
import ProfileCard from "@/src/components/modules/profile/ProfileCard";
import CustomContainer from "@/src/components/ui/CustomContainer";

const page = () => {
  return (
    <CustomContainer>
      <div className="grid grid-cols-4 gap-4">
        <section className="col-span-1">
          <ProfileCard/>
          <FollowList/>
        </section>
        <section className="col-span-2 ">
<CreatePost/>
<PostCard/>
        </section>
        <section className="col-span-1 bg-red-500">3</section>
      </div>
    </CustomContainer>
  );
};
export default page;
