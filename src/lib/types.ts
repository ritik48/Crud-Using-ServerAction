import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});

export type FormType = z.infer<typeof formSchema>;
