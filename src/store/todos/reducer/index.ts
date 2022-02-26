import { ITodoAction } from 'src/store/todos/reducer/actions'
import { ITodosState } from 'src/store/todos/reducer/types'

export const defaultState: ITodosState = {
  data: [],
  isLoading: false,
}

export const todosReducer = (state: ITodosState, action: ITodoAction) => {
  switch (action.type) {
    case 'REQUEST_TODOS': {
      return {
        ...state,
        isLoading: true,
      }
    }
    case 'REQUEST_TODOS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.todos,
      }
    }
    default:
      return state
  }
}
