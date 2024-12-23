"use client";

import { deleteTodo } from "@/app/actions";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { EditItem } from "./EditIem";
import { Delete, Trash } from "lucide-react";

export function Todo({ todo }: { todo: any }) {
  const [error, action, isPending] = useActionState(deleteTodo, null);
  return (
    <div
      key={todo._id}
      className="px-3 py-3 border w-full flex items-start justify-between"
    >
      <div>{todo.title}</div>
      <form action={action} className="flex items-center gap-2">
        <input type="hidden" name="_id" value={todo._id} />

        <Button disabled={isPending} variant={"outline"} className="border-none">
          <Trash size={15} />
        </Button>
        <EditItem config={{ edit: true, data: { ...todo }, }} />
      </form>
    </div>
  );
}
