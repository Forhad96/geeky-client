import PostView from "@/src/components/modules/post/PostView";

const page = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <div>
      {/* {[1,2,3].map(_id => <PostView post={}/>)} */}
      This post daynamic postsdsd
    </div>
  );
};
export default page;