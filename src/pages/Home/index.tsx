import React from 'react'
import { Layout } from 'src/components/Layout'
import { useReducerWithEffects } from 'src/hooks/useReducerWithEffects'
import { todosReducer, defaultState } from 'src/store/todos/reducer'
import { requestTodos } from 'src/store/todos/reducer/actions'
import {
  logActionEffect,
  requestAllTodosEffect,
} from 'src/store/todos/reducer/effects'

export const Home = () => {
  const { state, dispatch } = useReducerWithEffects<typeof todosReducer>(
    todosReducer,
    defaultState,
    {
      'REQUEST_TODOS': [requestAllTodosEffect],
      '*': [logActionEffect],
    }
  )

  const handleButtonClick = () => dispatch(requestTodos())

  return (
    <Layout>
      <button type="button" onClick={handleButtonClick}>
        request todos
      </button>
      <div>
        {state.isLoading && <span>loading...</span>}
        {state.data.map((todo) => (
          <span key={todo.id}>{todo.title}</span>
        ))}
      </div>
    </Layout>
  )
}
