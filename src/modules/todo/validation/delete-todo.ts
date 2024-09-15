import { z } from 'zod';

import { todoParamsSchema } from './shared';

export const deleteTodoSchema = z.object({
  params: todoParamsSchema
});

export type TDeleteTodoParams = z.infer<typeof deleteTodoSchema>['params'];
