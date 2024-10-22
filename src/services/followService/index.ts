"use server"
import axiosInstance from "@/src/lib/axiosInstance";
import { IFollow } from "@/src/types";
import { cookies } from "next/headers";



export const createFollow = async (followData: IFollow) => {
  const accessToken = cookies().get("accessToken")?.value;
  try {
    const { data } = await axiosInstance.post(
      "/follows/create-follow",
      followData,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );

    if (data.success) {
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const availableFollow = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  try {
    const { data } = await axiosInstance.get(
      "/follows/available-follow",
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );

    if (data.success) {
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
