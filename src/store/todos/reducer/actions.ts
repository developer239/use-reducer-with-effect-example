import { ITodo } from 'src/api/types'

export const requestTodos = () => ({
  type: 'REQUEST_TODOS' as const,
})

export const requestTodosSuccess = (todos: ITodo[]) => ({
  type: 'REQUEST_TODOS_SUCCESS' as const,
  payload: { todos },
})

export type ITodoAction = ReturnType<
  typeof requestTodos | typeof requestTodosSuccess
>
