import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

interface NewCommentInputProps {
  newComment: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmitComment: () => void;
}

const NewCommentInput = ({
  newComment,
  handleInputChange,
  handleSubmitComment,
}: NewCommentInputProps) => {
  return (
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
  );
};

export default NewCommentInput;
