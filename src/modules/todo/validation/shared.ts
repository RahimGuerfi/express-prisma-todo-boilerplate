import { z } from 'zod';

export const todoParamsSchema = z.object({
  id: z.string().uuid()
});
