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
import { addTodos } from "@/app/actions";
import { useActionState } from "react";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});

export type FormType = z.infer<typeof formSchema>;
export type FormConfig = {
  edit: boolean;
  data?: FormType;
};

export function AddItemForm({ config }: { config: FormConfig }) {
  const initialState: FormType = {
    title: config.edit ? (config.data ? config.data.title : "") : "",
  };
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialState,
  });

  const [error, action, isPending] = useActionState(addTodos, null);

  console.log("=========== ERROR ========== ", error);
  console.log("============ IS PENDING ============", isPending);

  return (
    <Form {...form}>
      <form action={action} className="space-y-8">
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