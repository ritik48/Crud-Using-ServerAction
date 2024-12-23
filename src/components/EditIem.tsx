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

export function EditItem({ config }: { config: FormConfig }) {
  return (
    <Dialog>
      <DialogTrigger className="border px-3 py-1 rounded-md">
        Edit
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
