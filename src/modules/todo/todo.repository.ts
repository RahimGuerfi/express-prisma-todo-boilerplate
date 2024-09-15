import { prisma } from '@/lib';

import { TCreateTodoBody, TGetTodosQuery, TUpdateTodoBody } from './validation';

class TodosRepository {
  createTodo(data: TCreateTodoBody) {
    return prisma.todo.create({
      data
    });
  }

  updateTodo(data: TUpdateTodoBody, id: string) {
    return prisma.todo.update({
      where: {
        id
      },
      data
    });
  }

  deleteTodo(id: string) {
    return prisma.todo.delete({
      where: {
        id
      }
    });
  }

  getTodoById(id: string) {
    return prisma.todo.findFirst({
      where: {
        id
      }
    });
  }

  getTodos({
    skip,
    take,
    sortKey = 'createdAt',
    sortOrder = 'desc'
  }: TGetTodosQuery) {
    return prisma.todo.findMany({
      skip,
      take,
      orderBy: {
        [sortKey]: sortOrder
      }
    });
  }

  todosCount() {
    return prisma.todo.count();
  }
}

export const todosRepository = new TodosRepository();
