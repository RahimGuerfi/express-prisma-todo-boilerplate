import { z } from 'zod';

export const todoBodySchema = z.object({
  title: z.string().min(4),
  description: z.string().min(8).optional(),
  completed: z.boolean().optional()
});

export const createTodoSchema = z.object({
  body: todoBodySchema
});

export type TCreateTodoBody = z.infer<typeof todoBodySchema>;
