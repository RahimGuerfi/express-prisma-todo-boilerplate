import { z } from 'zod';

import { todoParamsSchema } from './shared';

export const getTodoSchema = z.object({
  params: todoParamsSchema
});

export type TGetTodoParams = z.infer<typeof getTodoSchema>['params'];
