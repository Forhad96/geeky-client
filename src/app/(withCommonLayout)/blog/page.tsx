import PostEditor from "@/src/components/modules/post/PostEditor";
import { title } from "@/src/components/primitives";

export default function BlogPage() {
  return (
    <div>
      {/* <h1 className={title()}>Blog</h1> */}
      <PostEditor/>
    </div>
  );
}
