import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import CustomDropdown from "@/src/components/ui/shared/CustomDropdown";

interface Reply {
  id: number;
  name: string;
  role: string;
  message: string;
  time: string;
}

interface ReplyItemProps {
  reply: Reply;
}

const ReplyItem = ({ reply }: ReplyItemProps) => {
  const dropDownItems = [
    { key: "new", label: "New file" },
    { key: "copy", label: "Copy link" },
    { key: "edit", label: "Edit file" },
    { key: "delete", label: "Delete file" },
  ];

  return (
    <div>
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
          <span className="text-xs text-gray-400">{reply.time}</span>
          <CustomDropdown items={dropDownItems} />
        </div>
      </div>
      <div className="ml-12 w-full">
        <p>{reply.message}</p>
        <div className="flex space-x-4">
          <Button size="sm" className="text-blue-500">
            Like
          </Button>
          <Button size="sm" className="text-blue-500">
            Reply
          </Button>
        </div>
      </div>

      
    </div>
  );
};

export default ReplyItem;
