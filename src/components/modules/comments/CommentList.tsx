import { useState } from "react";
import { Card } from "@nextui-org/card";


import CommentItem from "./CommentItem";
import NewCommentInput from "./NewCommentInput";

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

const CommentList = () => {
  const [isReplyVisible, setIsReplyVisible] = useState<{
    [key: number]: boolean;
  }>({});
  const [newComment, setNewComment] = useState("");

  // Sample comments data
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
      ],
    },
    {
      id: 2,
      name: "Md. Ashikur Rahman Ashik",
      role: "MERN Stack Developer | Frontend Developer",
      message:
        "It’s very unfortunate but for these kind of people those who in need always suffer. Keep helping others.",
      time: "6h",
      likes: 3,
      replies: [],
    },
  ];

  // Handle reply visibility toggle
  const handleReplyClick = (commentId: number) => {
    setIsReplyVisible((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewComment(e.target.value);
  };

  // Handle comment submission
  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    alert(`Comment submitted: ${newComment}`);
    setNewComment(""); // Clear input after submission
  };

  return (
    <div className="max-w-xl mx-auto my-6">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isReplyVisible={isReplyVisible[comment.id]}
          handleReplyClick={handleReplyClick}
          handleInputChange={handleInputChange}
          handleSubmitReply={handleSubmitComment} // This can be refined based on actual reply logic
          newComment={newComment}
        />
      ))}
      {/* Add a new comment */}
      <NewCommentInput
        newComment={newComment}
        handleInputChange={handleInputChange}
        handleSubmitComment={handleSubmitComment}
      />
    </div>
  );
};

export default CommentList;
