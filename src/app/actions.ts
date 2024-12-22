"use server";

import { connectDB } from "@/lib/utils";
import { Todo } from "./models/todos";
import { revalidateTag } from "next/cache";
import { FormType } from "@/components/AddItemForm";

export async function addTodos(_prevState: any, data: FormData) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("========= ACTION ===========");
  // console.log(data);
  await connectDB();
  const todo = new Todo({ title: data.get("title") });
  await todo.save();

  revalidateTag("todos");

  return { success: true };
}

export async function deleteTodo(_prevState: any, data: FormData) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const _id = data.get("_id");

  console.log("============== id ============", _id);

  await connectDB();
  await Todo.findByIdAndDelete(_id);

  revalidateTag("todos");
}
