import { z } from 'zod';

import { todoBodySchema } from './create-todo';
import { todoParamsSchema } from './shared';

export const updateTodoSchema = z.object({
  body: todoBodySchema.partial(),
  params: todoParamsSchema
});

export type TUpdateTodoBody = z.infer<typeof updateTodoSchema>['body'];

export type TUpdateTodoParams = z.infer<typeof updateTodoSchema>['params'];
