import { Todo } from "@/app/models/todos";
import { connectDB } from "./utils";
import { unstable_cache } from "next/cache";

export async function fetchTodos() {
  // await new Promise((r) => setTimeout(r, 3000));
  await connectDB();
  const todos = await Todo.find();

  return JSON.parse(JSON.stringify(todos));
}

export const getTodos = unstable_cache(fetchTodos, [], {
  tags: ["todos"], // Tag for cache revalidation
});
