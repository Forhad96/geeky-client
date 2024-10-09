"use client";
import { useState } from "react";
import { Card } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import CustomDropdown from "../../ui/shared/CustomDropdown";

// Define types for the comment and reply
interface Reply {
  id: number;
  name: string;
  role: string;
  message: string;
  time: string;
}

interface Comment {
  id: number;
  name: string;
  role: string;
  message: string;
  time: string;
  likes: number;
  replies: Reply[];
}

const CommentSection = () => {
  const [isReplyVisible, setIsReplyVisible] = useState<{
    [key: number]: boolean;
  }>({});
  const [newComment, setNewComment] = useState("");

  const handleReplyClick = (commentId: number) => {
    setIsReplyVisible((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    alert(`Comment submitted: ${newComment}`);
  };

  const handleSubmitReply = () => {
    alert(`Reply submitted: ${newComment}`);
  };

  const dropDownItems = [
    { key: "new", label: "New file" },
    { key: "copy", label: "Copy link" },
    { key: "edit", label: "Edit file" },
    { key: "delete", label: "Delete file" },
  ];

  const comments: Comment[] = [
    {
      id: 1,
      name: "Nahid hannan Keya",
      role: "Business Development Executive",
      message:
        "এইসব কিছু পারিপার্শ্বিক এর জন্য আমাদের খাদ্যের সর্তিও জয় করারকার তারা গরিব না",
      time: "6h",
      likes: 6,
      replies: [
        {
          id: 11,
          name: "Jahirul Islam",
          role: "Business Development Executive",
          message:
            "Nahid hannan Keya আসলে বিষয় টা হচ্ছে কর্মসংস্থান এর থেকে চাকরি প্রাপ্তি বেশী।",
          time: "2h",
        },
        {
          id: 12,
          name: "Jahirul Islam",
          role: "Business Development Executive",
          message:
            "Nahid hannan Keya আসলে বিষয় টা হচ্ছে কর্মসংস্থান এর থেকে চাকরি প্রাপ্তি বেশী।",
          time: "2h",
        },
      ],
    },
    {
      id: 2,
      name: "Md. Ashikur Rahman Ashik",
      role: "MERN Stack Developer | Frontend Developer",
      message:
        "It’s very unfortunate but for these kind of people those who in need always suffers. Keep helping others.",
      time: "6h",
      likes: 3,
      replies: [],
    },
  ];

  return (
    <div className="max-w-xl mx-auto my-6">
      {comments.map((comment) => (
        <Card key={comment.id} className="mb-6 p-4 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar
                size="md"
                src={`https://i.pravatar.cc/150?img=${comment.id}`}
                alt={comment.name}
              />
              <div>
                <h4 className="font-semibold">{comment.name}</h4>
                <p className="text-sm text-gray-500">{comment.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{comment.time}</span>
              <CustomDropdown items={dropDownItems} />
            </div>
          </div>
          <div className="flex items-start">
            <div className="ml-14 w-full">
              <p className="mt-2">{comment.message}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex space-x-4">
                  <Button size="sm" className="text-blue-500">
                    Like
                  </Button>
                  <Button
                    size="sm"
                    className="text-blue-500"
                    onClick={() => handleReplyClick(comment.id)}
                  >
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {isReplyVisible[comment.id] && (
            <div className="mt-4 ml-12">
              <Textarea
                fullWidth
                placeholder={`Reply to ${comment.name}`}
                value={newComment}
                onChange={handleInputChange}
                aria-label={`Reply to ${comment.name}`}
              />
              <Button
                size="sm"
                className="mt-2 bg-blue-500 text-white"
                onClick={handleSubmitReply}
              >
                Reply
              </Button>
            </div>
          )}

          {comment.replies.length > 0 && (
            <div className="ml-10 mt-4 space-y-4">
              {comment.replies.map((reply) => (
                <div key={reply.id}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar
                        size="sm"
                        src={`https://i.pravatar.cc/150?img=${reply.id}`}
                        alt={reply.name}
                      />
                      <div>
                        <h4 className="font-medium">{reply.name}</h4>
                        <p className="text-sm text-gray-500">{reply.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">
                        {reply.time}
                      </span>
                      <CustomDropdown items={dropDownItems} />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="ml-12 w-full">
                      <p>{reply.message}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <Button size="sm" className="text-blue-500">
                            Like
                          </Button>
                          <Button
                            size="sm"
                            className="text-blue-500"
                            onClick={() => handleReplyClick(reply.id)}
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      ))}

      <Card className="p-4">
        <Input
          fullWidth
          placeholder="Add a comment..."
          isClearable
          value={newComment}
          onChange={handleInputChange}
          aria-label="Add a comment"
        />
        <Button
          className="mt-2 bg-blue-500 text-white"
          onClick={handleSubmitComment}
        >
          Post Comment
        </Button>
      </Card>
    </div>
  );
};

export default CommentSection;


const ReplyInput = ()=> {
    return
                <div className="mt-4 ml-12">
              <Textarea
                fullWidth
                // placeholder={`Reply to ${comment.name}`}
                // value={newComment}
                // onChange={handleInputChange}
                // aria-label={`Reply to ${comment.name}`}
                
              />
              <Button
              size="sm"
              
                className="mt-2 bg-blue-500 text-white"
                // onClick={handleSubmitReply}
              >
                Reply
              </Button>
            </div>
}