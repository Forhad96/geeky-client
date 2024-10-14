export interface IPost {
  _id: string;
  title: string;
  images: any[];
  content: string;
  tags: string[];
  category: string;
  author: Author;
  upVotes: number;
  downVotes: number;
  isPremium: boolean;
  views: number;
  pdfVersion: string;
  isDeleted: boolean;
  comments: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Author {
  _id: string;
  name: string;
  username: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  isVerified: boolean;
  isPremiumUser: boolean;
  followers: any[];
  following: any[];
  posts: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
