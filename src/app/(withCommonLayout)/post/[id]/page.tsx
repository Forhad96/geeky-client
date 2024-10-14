"use client";
import PostView from "@/src/components/modules/post/PostView";
import Loading from "@/src/components/ui/Loading";
import { useGetSinglePost } from "@/src/hooks/post.hook";

const page = ({ params }: { params: { id: string } }) => {
  const { data ,isLoading} = useGetSinglePost(params?.id);

  if(isLoading){
    return <Loading/>
  }
  console.log(data?.data);
  return <PostView post={data?.data} />;
};
export default page;
