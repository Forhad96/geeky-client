import { Card } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

import { Textarea } from "@nextui-org/input";
import CustomDropdown from "@/src/components/ui/shared/CustomDropdown";
import ReplyList from "./ReplyList";

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

interface CommentItemProps {
  comment: Comment;
  isReplyVisible: boolean;
  handleReplyClick: (commentId: number) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitReply: () => void;
  newComment: string;
}

const CommentItem = ({
  comment,
  isReplyVisible,
  handleReplyClick,
  handleInputChange,
  handleSubmitReply,
  newComment,
}: CommentItemProps) => {
  const dropDownItems = [
    { key: "new", label: "New file" },
    { key: "copy", label: "Copy link" },
    { key: "edit", label: "Edit file" },
    { key: "delete", label: "Delete file" },
  ];

  return (
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
      <div className="ml-14 w-full">
        <p className="mt-2">{comment.message}</p>
        <div className="flex space-x-4 mt-2">
          <Button size="sm" className="text-blue-500">
            Like ({comment.likes})
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

      {/* Show replies */}
      {isReplyVisible && (
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
            Submit Reply
          </Button>
        </div>
      )}

      {/* Render replies */}
      <ReplyList replies={comment.replies} />
    </Card>
  );
};

export default CommentItem;
