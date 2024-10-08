import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

const CreatePost = () => {
  return (
    <div className="h-28 bg-light-background dark:bg-dark-background p-4 rounded-md">
      <div className="flex items-center gap-2">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Input placeholder="Whats Happening's.." className="flex-1" />
      </div>
    </div>
  );
};
export default CreatePost;
