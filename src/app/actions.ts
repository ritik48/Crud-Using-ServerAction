"use server";

import { connectDB, formatErrors } from "@/lib/utils";
import { Todo } from "./models/todos";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { formSchema, FormType } from "@/lib/types";

export async function addTodos(data: FormType) {
  const parseData = formSchema.safeParse(data);
  if (!parseData.success) {
    return formatErrors<FormType>(parseData.error.errors);
  }

  await connectDB();

  const todo = new Todo({ title: data.title });
  await todo.save();

  revalidateTag("todos");
  return { success: true };
}

export async function editTodos(data: FormType, _id: string) {
  const parseData = formSchema.safeParse(data);
  if (!parseData.success) {
    return formatErrors<FormType>(parseData.error.errors);
  }
  await connectDB();

  await Todo.findByIdAndUpdate(_id, { title: data.title });

  revalidateTag("todos");
  return { success: true };
}

export async function deleteTodo(_prevState: any, data: FormData) {
  const _id = data.get("_id");

  await connectDB();
  await Todo.findByIdAndDelete(_id);

  revalidateTag("todos");
}
