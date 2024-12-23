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
import { Pencil } from "lucide-react";
import { useState } from "react";

export function EditItem({ config }: { config: FormConfig }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="px-3 py-1 rounded-md hover:bg-gray-200">
        <Pencil size={15} className="" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <AddItemForm
              config={{ ...config, onSuccess: () => setOpen(false) }}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
