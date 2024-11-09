"use client";
import Category from "@/src/components/modules/category/Category";
import FollowList from "@/src/components/modules/follow/FllowList";
import CreatePost from "@/src/components/modules/post/CreatePost";
import PopularPost from "@/src/components/modules/post/PopularPost";
import PostCard from "@/src/components/modules/post/PostCard";
import ProfileCard from "@/src/components/modules/profile/ProfileCard";
import TrendingCard from "@/src/components/modules/trandingPost/Trending";
import CustomContainer from "@/src/components/ui/CustomContainer";
import { useUser } from "@/src/context/user.context";
import { useGetAllPost } from "@/src/hooks/post.hook";
import { IPost } from "@/src/types/post.type";

const page = () => {
  const { user } = useUser();
  const { data: allPost } = useGetAllPost();
  // console.log(allPost);
  return (
    <CustomContainer>
      <div className="grid grid-cols-4 gap-4">
        <section className="col-span-1">
          {user && <ProfileCard />}
          <TrendingCard />
          <div>{user && <FollowList />}</div>
        </section>
        <section className="col-span-2 ">
          <CreatePost />
          {allPost?.data?.map((post: IPost) => (
            <PostCard key={post._id} post={post} />
          ))}
        </section>
        <section className="col-span-1 ">
          {/* <PopularPost/> */}
          <Category />
        </section>
      </div>
    </CustomContainer>
  );
};
export default page;
