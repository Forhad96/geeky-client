"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useGetAllPost } from "@/src/hooks/post.hook";
import PostCard from "../post/PostCard";
import CreatePost from "../post/CreatePost";
import { IPost } from "@/src/types/post.type";
import ProfileContent from "./ProfileContent";

export default function TabGroup() {
  const { data: allPost } = useGetAllPost();
  let tabs = [
    {
      id: "post",
      label: "Posts",
      content: <ProfileContent/>
    },
    {
      id: "about",
      label: "About",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "follower",
      label: "Follower",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "following",
      label: "Following",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "more",
      label: "More",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="mt-4 flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
