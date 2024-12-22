import { Todo } from "@/app/models/todos";
import { connectDB } from "@/lib/utils";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  await connectDB();

  const todo = new Todo({ title: data.title });
  await todo.save();

  console.log(data);

  revalidateTag("todos");

  return NextResponse.json({ success: true });
}
