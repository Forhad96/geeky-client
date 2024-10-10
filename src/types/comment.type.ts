export interface TReply {
  id: number;
  name: string;
  role: string;
  message: string;
  time: string;
}

export interface TComment {
  id: number;
  name: string;
  role: string;
  message: string;
  time: string;
  likes: number;
  replies: TReply[];
}
