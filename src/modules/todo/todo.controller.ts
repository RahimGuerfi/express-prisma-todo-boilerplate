import { TodosErrors } from '@/constants';
import { HttpNotFoundError } from '@/lib';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { todoMappers } from './todo.mappers';
import { todosRepository } from './todo.repository';
import { TodoService } from './todo.service';
import {
  createTodoSchema,
  deleteTodoSchema,
  getTodoSchema,
  getTodosSchema,
  updateTodoSchema
} from './validation';

export const TodoController = {
  createTodo: async (req: Request, res: Response) => {
    const { body } = createTodoSchema.parse(req);

    const createdTodo = await TodoService.createTodo(body);

    return res.status(httpStatus.CREATED).json(createdTodo);
  },

  getTodos: async (req: Request, res: Response) => {
    const { query } = getTodosSchema.parse(req);

    const paginatedData = await TodoService.getPaginatedTodos(query);

    return res.status(httpStatus.OK).send(paginatedData);
  },

  updateTodo: async (req: Request, res: Response) => {
    const { body, params } = updateTodoSchema.parse(req);

    const Todo = await todosRepository.getTodoById(params.id);

    if (!Todo) {
      throw new HttpNotFoundError({
        message: TodosErrors.TodoNotFound
      });
    }

    const updatedTodo = await TodoService.updateTodo(body, params);

    return res.status(httpStatus.OK).json(updatedTodo);
  },

  deleteTodo: async (req: Request, res: Response) => {
    const { params } = deleteTodoSchema.parse(req);

    const Todo = await todosRepository.getTodoById(params.id);

    if (!Todo) {
      throw new HttpNotFoundError({
        message: TodosErrors.TodoNotFound
      });
    }

    await TodoService.deleteTodo(params);

    return res.status(httpStatus.OK).json({
      success: true
    });
  },

  getTodo: async (req: Request, res: Response) => {
    const { params } = getTodoSchema.parse(req);

    const todo = await TodoService.getTodo(params);

    if (!todo) {
      throw new HttpNotFoundError({
        message: TodosErrors.TodoNotFound
      });
    }

    return res
      .status(httpStatus.OK)
      .json(todoMappers.serializePaginatedTodo(todo));
  }
};
