import FollowList from "@/src/components/modules/follow/FllowList";
import CreatePost from "@/src/components/modules/post/CreatePost";
import PostCard from "@/src/components/modules/post/PostCard";
import { useGetAllPost } from "@/src/hooks/post.hook";
import { IPost } from "@/src/types/post.type";

const ProfileContent = () => {
  const { data: allPost } = useGetAllPost();

  return (
    <div className="grid grid-cols-4 gap-4">
      <section className="col-span-1">
        <FollowList />
      </section>
      <section className="col-span-3">
        <CreatePost />
        {allPost?.data?.map((post: IPost) => (
          <PostCard key={post._id} post={post} />
        ))}
      </section>
      {/* <section className="col-span-1">
        <Category />
        <TrendingCard />
      </section> */}
    </div>
  );
};

export default ProfileContent