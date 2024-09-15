import { TPaginatedData } from '@/types';
import { paginationMeta } from '@/utils';

import { todoMappers } from './todo.mappers';
import { todosRepository } from './todo.repository';
import { TPaginatedTodo } from './todo.types';
import {
  TCreateTodoBody,
  TDeleteTodoParams,
  TGetTodoParams,
  TGetTodosQuery,
  TUpdateTodoBody,
  TUpdateTodoParams
} from './validation';

export const TodoService = {
  createTodo: async (body: TCreateTodoBody): Promise<TPaginatedTodo> => {
    const createdTodo = await todosRepository.createTodo(body);

    return todoMappers.serializePaginatedTodo(createdTodo);
  },

  getPaginatedTodos: async (
    query: TGetTodosQuery
  ): Promise<TPaginatedData<TPaginatedTodo>> => {
    const { skip, take } = query;

    const plans = await todosRepository.getTodos(query);

    const totalCount = await todosRepository.todosCount();

    const meta = paginationMeta(totalCount, skip ?? 0, take ?? totalCount);

    return {
      data: todoMappers.serializeTodos(plans),
      paginationMeta: meta
    };
  },

  updateTodo: async (
    body: TUpdateTodoBody,
    { id }: TUpdateTodoParams
  ): Promise<TPaginatedTodo> => {
    const updatedTodo = await todosRepository.updateTodo(body, id);

    return todoMappers.serializePaginatedTodo(updatedTodo);
  },

  deleteTodo: async ({ id }: TDeleteTodoParams): Promise<TPaginatedTodo> => {
    const deletedTodo = await todosRepository.deleteTodo(id);

    return todoMappers.serializePaginatedTodo(deletedTodo);
  },

  getTodo: async ({ id }: TGetTodoParams) => {
    const todo = await todosRepository.getTodoById(id);

    return todo;
  }
};
