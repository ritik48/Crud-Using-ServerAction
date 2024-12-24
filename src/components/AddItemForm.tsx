"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { infer, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { addTodos, editTodos } from "@/app/actions";
import { useActionState, useEffect, useRef } from "react";
import { formSchema, FormType } from "@/lib/types";

export type FormConfig = {
  edit: boolean;
  data?: {
    title: string;
    _id: string;
  };
  onSuccess?: () => void;
};

export function AddItemForm({ config }: { config: FormConfig }) {
  const initialState: FormType = {
    title: config.edit ? (config.data ? config.data.title : "") : "",
  };
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialState,
  });

  const isPending = form.formState.isSubmitting;

  async function onSubmit(value: FormType) {
    let res;
    if (config.edit) res = await editTodos(value, config.data?._id as string);
    else res = await addTodos(value);

    if ("success" in res) {
      return config.onSuccess?.();
    }

    if (res.title) {
      form.setError("title", { message: res.title });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {config.edit ? "Edit" : "Create"}
        </Button>
      </form>
    </Form>
  );
}
