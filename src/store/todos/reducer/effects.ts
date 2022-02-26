import { fetchAllTodos } from 'src/api/todos'
import { TEffect } from 'src/hooks/useReducerWithEffects/types'
import { todosReducer } from 'src/store/todos/reducer/index'

export const requestAllTodosEffect: TEffect<typeof todosReducer> = async (
  _state,
  dispatch,
) => {
  const todos = await fetchAllTodos()
  dispatch({ type: 'REQUEST_TODOS_SUCCESS', payload: { todos } })
}

export const logActionEffect: TEffect<any> = (_, __, action) => {
  // eslint-disable-next-line no-console
  console.log('logger:', action)
}
