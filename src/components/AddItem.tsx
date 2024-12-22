"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddItemForm, FormConfig } from "./AddItemForm";
import { useState } from "react";

export function AddItem({ config }: { config: FormConfig }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="border px-3 py-1 rounded-md">
        Add Todo
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <AddItemForm config={config} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
