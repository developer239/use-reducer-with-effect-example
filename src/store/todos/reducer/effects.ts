/* eslint-disable no-console */
import { fetchAllTodos } from 'src/api/todos'
import { TEffect } from 'src/hooks/useReducerWithEffects/types'
import { todosReducer } from 'src/store/todos/reducer/index'

type TTodoEffect = TEffect<typeof todosReducer>

export const requestAllTodosEffect: TTodoEffect = async (_state, dispatch) => {
  const todos = await fetchAllTodos()
  dispatch({ type: 'REQUEST_TODOS_SUCCESS', payload: { todos } })
}

// any because we can run this for any reducer
export const logActionEffect: TEffect<any> = (_, __, action) => {
  console.log('logger:', action)
}
