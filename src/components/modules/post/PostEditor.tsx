"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import { generateSlug } from "@/src/lib/generateSlug";
import { Input, Textarea } from "@nextui-org/input";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { IPost } from "@/src/types";
import { useCreatePost } from "@/src/hooks/post.hook";



export default function PostEditor() {
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [description, setDescription] = useState<string>("");
 const [tags, setTags] = useState<string>(""); // Tags as a comma-separated string
 const [category, setCategory] = useState<string>("");

  const [content, setContent] = useState<string>("");

  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess,
    isError
  } = useCreatePost();



  // Handle title change and auto-generate slug
  function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
    const newTitle = e.target.value;
    setTitle(newTitle);
    const autoSlug = generateSlug(newTitle);
    setSlug(autoSlug);
  }

  // Handle form submission
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
 const newBlog: IPost = {
   title,
   slug,
   description,
   content,
   tags: tags.split(",").map((tag) => tag.trim()), // Convert tags to array
   category,
 };
handleCreatePost(newBlog)
  }

  // Custom Quill toolbar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-4">
        {/* Blog Editor */}
        <Card className="w-full max-w-3xl p-5 my-6 mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5">
            Editor
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Title */}
              <div className="sm:col-span-2">
                <Input
                  label="Title"
                  value={title}
                  onChange={handleTitle}
                  placeholder="Type the blog title"
                  fullWidth
                />
              </div>

              {/* Slug */}
              <div className="sm:col-span-2">
                <Input
                  label="Slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Auto-generated slug"
                  fullWidth
                />
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <Textarea
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write your blog description"
                  rows={4}
                  fullWidth
                />
              </div>

              {/* Content */}
              <div className="sm:col-span-2">
                <label className="mb-2 font-medium">Content</label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                />
              </div>

              {/* Tags */}
              <div className="sm:col-span-2">
                <Input
                  label="Tags (comma separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g., astronomy, space, science"
                  fullWidth
                />
              </div>

              {/* Category */}
              <div className="sm:col-span-2">
                <Input
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., Science"
                  fullWidth
                />
              </div>
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              Create Blog Post
            </Button>
          </form>
        </Card>

        {/* Blog View */}
        <Card className="w-full max-w-3xl p-8 my-6 mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5">
            View
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Title */}
            <div className="sm:col-span-2">
              <h3 className="font-medium">Title</h3>
              <p className="text-2xl font-bold">{title}</p>
            </div>

            {/* Slug */}
            <div className="sm:col-span-2">
              <h3 className="font-medium">Slug</h3>
              <p>{slug}</p>
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <h3 className="font-medium">Description</h3>
              <p>{description}</p>
            </div>

            {/* Content */}
            <div className="sm:col-span-2">
              <h3 className="font-medium">Content</h3>
              <div>{parse(content)}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
