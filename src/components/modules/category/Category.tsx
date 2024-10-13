"use client"
import { useState } from "react";
import { Card, CardBody} from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Avatar } from "@nextui-org/avatar";
import { Divider } from "@nextui-org/divider";
const ChevronDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
const categories = [
  { name: "UX ডিজাইন", color: "bg-orange-500" },
  { name: "অফটপিক", color: "bg-gray-400" },
  { name: "আর্টিফিশিয়াল ইন্টেলিজেন্স", color: "bg-teal-500" },
  { name: "ওয়েব ডেভেলপমেন্ট", color: "bg-red-500" },
  { name: "ওয়ার্ডপ্রেস", color: "bg-blue-500" },
  { name: "কনটেন্ট রাইটিং", color: "bg-orange-700" },
  { name: "গ্রাফিক ডিজাইন", color: "bg-green-500" },
  { name: "চাকরীর বিজ্ঞাপন", color: "bg-purple-600" },
  { name: "ডিজিটাল মার্কেটিং", color: "bg-pink-600" },
  { name: "নোটিশবোর্ড", color: "bg-gray-800" },
  { name: "ভাষা শিক্ষা", color: "bg-red-600" },
  { name: "মোবাইল এপ ডেভেলপমেন্ট", color: "bg-blue-600" },
];

const Category = () => {
  return (
    <Card className=" bg-dark-background text-white p-4 my-4">
      <CardBody className="p-0">
        {/* Topics and My Posts */}
        <div className="space-y-3">
          <Button isIconOnly variant="light" className="w-full justify-start">
            {/* <Avatar as="span" icon={<ChevronDownIcon />} /> */}
            <span className="ml-2">Topics</span>
          </Button>
          <Button isIconOnly variant="light" className="w-full justify-start">
            {/* <Avatar as="span" icon={<ChevronDownIcon />} /> */}
            <span className="ml-2">My Posts</span>
          </Button>
          <Button isIconOnly variant="light" className="w-full justify-start">
            {/* <Avatar as="span" icon={<ChevronDownIcon />} /> */}
            <span className="ml-2">More</span>
          </Button>
        </div>

        <Divider className="my-4" />

        {/* Categories Section */}
        <Accordion>
          <AccordionItem
            key="1"
            title="Categories"
            // startContent={<ChevronDownIcon />}
          >
            <div className="mt-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-3"
                >
                  <div className="flex items-center space-x-2">
                    <span
                      className={`w-3 h-3 ${category.color} rounded-full`}
                    ></span>
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <span className="text-blue-400 text-xs">●</span>
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>

        <Divider className="my-4" />

        {/* All Categories and Icons */}
        <div className="flex flex-col mt-auto">
          <Button isIconOnly variant="light" className="w-full justify-start">
            {/* <Avatar as="span" icon={<ChevronDownIcon />} /> */}
            <span className="ml-2">All categories</span>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Category;
