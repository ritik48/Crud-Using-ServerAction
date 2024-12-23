"use server";

import { connectDB } from "@/lib/utils";
import { Todo } from "./models/todos";
import { revalidateTag } from "next/cache";
import { FormType } from "@/components/AddItemForm";

export async function addTodos(_prevState: any, data: FormData) {
  await connectDB();

  const todo = new Todo({ title: data.get("title") });
  await todo.save();

  revalidateTag("todos");
}

export async function editTodos(_prevState: any, data: FormData, _id: string) {
  await connectDB();

  await Todo.findByIdAndUpdate(_id, { title: data.get("title") });

  revalidateTag("todos");
}

export async function deleteTodo(_prevState: any, data: FormData) {
  const _id = data.get("_id");

  await connectDB();
  await Todo.findByIdAndDelete(_id);

  revalidateTag("todos");
}
