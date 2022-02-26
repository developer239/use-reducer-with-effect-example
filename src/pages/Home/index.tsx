import React from 'react'
import { Layout } from 'src/components/Layout'
import { useReducerWithMiddleware } from 'src/hooks/useReducerWithEffects'
import { todosReducer, defaultState } from 'src/store/todos/reducer'
import { requestTodos } from 'src/store/todos/reducer/actions'
import {
  logActionEffect,
  requestAllTodosEffect,
} from 'src/store/todos/reducer/effects'

export const Home = () => {
  const { state, dispatch } = useReducerWithMiddleware<typeof todosReducer>(
    todosReducer,
    defaultState,
    [requestAllTodosEffect, logActionEffect]
  )

  const handleButtonClick = () => dispatch(requestTodos())

  return (
    <Layout>
      <div>
        <button type="button" onClick={handleButtonClick}>
          request todos
        </button>
      </div>
      {JSON.stringify(state, null, 2)}
    </Layout>
  )
}
