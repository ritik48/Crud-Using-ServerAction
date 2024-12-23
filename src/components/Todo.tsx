"use client";

import { deleteTodo } from "@/app/actions";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { EditItem } from "./EditIem";

export function Todo({ todo }: { todo: any }) {
  const [error, action, isPending] = useActionState(deleteTodo, null);
  return (
    <div
      key={todo._id}
      className="px-3 py-3 border w-full flex items-start justify-between"
    >
      <div>{todo.title}</div>
      <form action={action}>
        <input type="hidden" name="_id" value={todo._id} />
        <Button disabled={isPending}>Delete</Button>
        <EditItem config={{ edit: true, data: { ...todo } }} />
      </form>
    </div>
  );
}
