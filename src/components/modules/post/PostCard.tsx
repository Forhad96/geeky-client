"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { CommentIcon, HandThumbDownIcon, HandThumbUpIcon } from "../../icons";
import CustomDropdown from "../../ui/shared/CustomDropdown";
import CommentList from "../comments/CommentList";
import React, { useState } from "react";
import { IPost } from "@/src/types/post.type";
import { useRouter } from "next/navigation";

const dropDownItems = [
  { key: "new", label: "New file" },
  { key: "copy", label: "Copy link" },
  { key: "edit", label: "Edit file" },
  {
    key: "delete",
    label: "Delete file",
  },
];

interface PostCardProps {
  post: IPost;
}

export default function PostCard({ post }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const [isFollowed, setIsFollowed] = React.useState(false);
  const router = useRouter();
  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };
  // console.log(post?.author?.username);

  const handleNavigate = () => {
    router.push(`/post/${post._id}`);
    // console.log("okkkkkk");
  };
  return (
    <div onClick={handleNavigate}>
      <Card
        onClick={handleNavigate}
        className="mt-2 bg-light-background dark:bg-dark-background cursor-pointer  transition-all"
      >
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {post?.author?.name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @{post?.author?.username}
              </h5>
            </div>
          </div>
          <div className="flex gap-5">
            <Button
              className={
                isFollowed
                  ? "bg-transparent text-foreground border-default-200"
                  : ""
              }
              color="primary"
              radius="full"
              size="sm"
              variant={isFollowed ? "bordered" : "solid"}
              onPress={() => setIsFollowed(!isFollowed)}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </Button>
            <CustomDropdown items={dropDownItems} />
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex justify-between">
            <div className="w-10/12">
              <p className="font-blod">{post?.title}</p>
              <p className="overflow-ellipsis py-2 text-sm">{post?.content}</p>
              <span className="pt-2">
                #FrontendWithZoey
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
            </div>
            <Image
              width={400}
              className=""
              height={150}
              alt="NextUI hero Image"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="gap-4">
          <Button variant="light" className="w-full">
            <HandThumbUpIcon />
            {post?.upVotes}
          </Button>
          <Button variant="light" className="w-full">
            <HandThumbDownIcon />
            {post?.downVotes}
          </Button>
          <Button variant="light" className="w-full" onClick={toggleComments}>
            <CommentIcon />
            Comments
          </Button>
        </CardFooter>
        {showComments && <CommentList />}
      </Card>
    </div>
  );
}

[
  {
    title: "The Mysteries of Black Holes",
    images: [],
    content:
      "Black holes are one of the most intriguing phenomena in the universe. This post delves into their formation, properties, and the latest research.",
    tags: ["astronomy", "space", "science"],
    category: "Science",
    author: "66fe9b6c7ebde763bbdf1a6e",
    upVotes: 0,
    downVotes: 0,
    isPremium: false,
    views: 0,
    pdfVersion: "",
    isDeleted: false,
    comments: 0,
  },
  {
    title: "The Life Cycle of Stars",
    images: [],
    content:
      "Stars go through various stages from birth to death. This post explores the life cycle of stars and the different types of stars in the universe.",
    tags: ["astronomy", "space", "science"],
    category: "Science",
    author: "66fe9b6c7ebde763bbdf1a6e",
    upVotes: 0,
    downVotes: 0,
    isPremium: false,
    views: 0,
    pdfVersion: "",
    isDeleted: false,
    comments: 0,
  },
  {
    title: "Exploring Exoplanets",
    images: [],
    content:
      "Exoplanets are planets that orbit stars outside our solar system. This post discusses the methods used to discover exoplanets and what we have learned about them.",
    tags: ["astronomy", "space", "science"],
    category: "Science",
    author: "66fe9b6c7ebde763bbdf1a6e",
    upVotes: 0,
    downVotes: 0,
    isPremium: false,
    views: 0,
    pdfVersion: "",
    isDeleted: false,
    comments: 0,
  },
  {
    title: "The Big Bang Theory",
    images: [],
    content:
      "The Big Bang Theory is the leading explanation for the origin of the universe. This post explains the theory and the evidence supporting it.",
    tags: ["astronomy", "space", "science"],
    category: "Science",
    author: "66fe9b6c7ebde763bbdf1a6e",
    upVotes: 0,
    downVotes: 0,
    isPremium: false,
    views: 0,
    pdfVersion: "",
    isDeleted: false,
    comments: 0,
    createdAt: "2024-10-11T06:47:29.171Z",
    updatedAt: "2024-10-11T06:47:29.171Z",
    __v: 0,
  },
  {
    title: "The Search for Dark Matter",
    images: [],
    content:
      "Dark matter makes up a significant portion of the universe, yet it remains elusive. This post explores what we know about dark matter and the ongoing search to understand it.",
    tags: ["astronomy", "space", "science"],
    category: "Science",
    author: "66fe9b6c7ebde763bbdf1a6e",
    upVotes: 0,
    downVotes: 0,
    isPremium: false,
    views: 0,
    pdfVersion: "",
    isDeleted: false,
    comments: 0,
  },
];
