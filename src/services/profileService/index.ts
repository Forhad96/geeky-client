"use server";
import axiosInstance from "@/src/lib/axiosInstance";
import { cookies } from "next/headers";

export const getMyProfile = async (userId: string | undefined) => {
  const accessToken = cookies().get("accessToken")?.value;
  try {
    const { data } = await axiosInstance.get(`/profile`, {
      headers: {
        Authorization: accessToken,
      },
    });

    // if (data.success) {
    // }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
