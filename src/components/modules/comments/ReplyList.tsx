import ReplyItem from "./ReplyItem";


interface Reply {
  id: number;
  name: string;
  role: string;
  message: string;
  time: string;
}

interface ReplyListProps {
  replies: Reply[];
}

const ReplyList = ({ replies }: ReplyListProps) => {
  return (
    <div className="ml-10 mt-4 space-y-4">
      {replies.map((reply) => (
        <ReplyItem key={reply.id} reply={reply} />
      ))}
    </div>
  );
};

export default ReplyList;
