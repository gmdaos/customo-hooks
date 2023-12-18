import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handlerChangeState = (id) => {
    dispatchTodo({
      type: 'Update todo',
      payload: id,
    });
  };

  const handlerNewTodo = (Todo) => {
    const action = {
      type: 'Add todo',
      payload: Todo,
    };
    dispatchTodo(action);
  };

  const handlerOnDelete = (id) => {
    dispatchTodo({
      type: 'Remove todo',
      payload: id,
    });
  };

  return {
    todos,
    TodoCount: todos.length,
    observedCount: todos.filter((todo) => todo.observed).length,
    handlerChangeState,
    handlerNewTodo,
    handlerOnDelete,
  };
};
