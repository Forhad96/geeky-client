import { IPost } from "@/src/types/post.type";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import parse from "html-react-parser";
import { FC } from "react";
interface PostViewProps {
    post: Partial<IPost>
} 
const PostView:FC<PostViewProps> = ({post}) => {
    return (
      <Card className="w-full max-w-3xl p-8 my-6 mx-auto">
        {/* <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5">
          View
        </h2> */}
         <Image
      width={1200}
      height={300}
      className="w-full object-cover"
      alt="NextUI hero Image with delay"
      src="https://app.requestly.io/delay/5000/https://nextui.org/images/hero-card-complete.jpeg"
    />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Title */}
          <div className="sm:col-span-2">
            <h3 className="font-medium">Title</h3>
            <p className="text-2xl font-bold">{post.title}</p>
          </div>

          {/* Slug */}
          <div className="sm:col-span-2">
            <h3 className="font-medium">Slug</h3>
            <p>{"slug"}</p>
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <h3 className="font-medium">Description</h3>
            {/* <p>{description}</p> */}
          </div>

          {/* Content */}
          <div className="sm:col-span-2">
            <h3 className="font-medium">Content</h3>
            <div>{parse(post?.content as string)}</div>
          </div>
        </div>
      </Card>
    );
};
export default PostView;