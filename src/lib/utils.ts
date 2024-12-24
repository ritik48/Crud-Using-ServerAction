import { clsx, type ClassValue } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const connection: { isConnected?: number } = {};

export async function connectDB() {
  if (connection.isConnected) {
    return;
  }
  const connect = await mongoose.connect("mongodb://127.0.0.1:27017/next-crud");

  console.log("CONNECTED TO DB.");

  connection.isConnected = connect.connections[0].readyState;
}

type FormError<T> = {
  [key in keyof T]: string;
};

export const formatErrors = <T>(errors: z.ZodIssue[]) => {
  return errors.reduce((acc, err) => {
    const field = err.path[0] as keyof FormError<T>;
    acc[field] = err.message;
    return acc;
  }, {} as FormError<T>);
};
