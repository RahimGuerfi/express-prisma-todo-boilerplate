import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const numberStringSchema = z
  .string()
  .regex(/^\d+$/, 'Positive numbers only')
  .transform(Number);

export const sortOrderSchema = z.nativeEnum(Prisma.SortOrder).optional();

export const basePaginationQuerySchema = z.object({
  skip: numberStringSchema.optional(),
  take: numberStringSchema.optional()
});
