import { basePaginationQuerySchema, sortOrderSchema } from '@/constants';
import { z } from 'zod';

const SortKeys = ['createdAt', 'title'] as const;

const getTodosQuerySchema = basePaginationQuerySchema.merge(
  z.object({
    sortKey: z.enum(SortKeys).optional(),
    sortOrder: sortOrderSchema
  })
);

export const getTodosSchema = z.object({
  query: getTodosQuerySchema
});

export type TGetTodosQuery = z.infer<typeof getTodosQuerySchema>;
