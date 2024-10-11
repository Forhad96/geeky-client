"use server"
import { cookies } from "next/headers";
import axiosInstance from "@/src/lib/axiosInstance";
import { IPost } from "@/src/types";

export const createPost = async (postData: IPost) => {
  const accessToken = cookies().get("accessToken")?.value;
  try {
    const { data } = await axiosInstance.post("/posts/create-post", postData, {
      headers: {
        Authorization: accessToken,
      },
    });

    if (data.success) {
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
