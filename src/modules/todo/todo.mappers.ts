import { Todo } from '@prisma/client';

import { TPaginatedTodo } from './todo.types';

class TodoMappers {
  serializePaginatedTodo(todo: Todo): TPaginatedTodo {
    return {
      ...todo,
      description: todo.description ?? undefined
    };
  }

  serializeTodos(todos: Todo[]) {
    return todos.map((todo) => this.serializePaginatedTodo(todo));
  }
}

export const todoMappers = new TodoMappers();
