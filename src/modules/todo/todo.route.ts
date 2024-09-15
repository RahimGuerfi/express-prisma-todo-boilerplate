import { validate } from '@/middleware';
import { catchError } from '@/utils';
import { Router } from 'express';

import { TodoController } from './todo.controller';
import {
  createTodoSchema,
  deleteTodoSchema,
  getTodoSchema,
  getTodosSchema,
  updateTodoSchema
} from './validation';

const todo = Router();

todo.post(
  '/',
  validate(createTodoSchema),
  catchError(TodoController.createTodo)
);

todo.get('/', validate(getTodosSchema), catchError(TodoController.getTodos));

todo.put(
  '/:id',
  validate(updateTodoSchema),
  catchError(TodoController.updateTodo)
);

todo.delete(
  '/:id',
  validate(deleteTodoSchema),
  catchError(TodoController.deleteTodo)
);

todo.get('/:id', validate(getTodoSchema), catchError(TodoController.getTodo));

export default todo;
