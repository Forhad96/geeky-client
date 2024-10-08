"use client"
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";
import { HandThumbDownIcon, HandThumbUpIcon } from "../../icons";

export default function PostCard() {
  return (
    <Card className="mt-2 bg-light-background dark:bg-dark-background">
      <CardHeader className="flex justify-between gap-3">
        <div className="flex gap-3">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <div className="flex flex-col">
            <p className="text-md">Samir Hossain</p>
            <p className="text-small text-default-500">@samir</p>
          </div>
        </div>

        <div>
          <Dropdown>
            <DropdownTrigger>
              <div>
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
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
        <Image
          width={800}
          height={300}
          alt="NextUI hero Image"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
      <Divider />
      <CardFooter className="gap-4">
        <Button className="w-full">
 
          <HandThumbUpIcon/>
          100k
        </Button>
        <Button className="w-full">
<HandThumbDownIcon/>
          10k
        </Button>
        <Button className="w-full">
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
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          20
        </Button>
      </CardFooter>
    </Card>
  );
}
