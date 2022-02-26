import {
  Reducer,
  ReducerAction,
  ReducerState,
  useEffect,
  useReducer,
  useRef,
} from 'react'
import { TEffect } from 'src/hooks/useReducerWithEffects/types'

export const useReducerWithEffects = <TReducer extends Reducer<any, any>>(
  reducer: TReducer,
  initialState: ReducerState<TReducer>,
  effects: {
    [key in Pick<ReducerAction<TReducer>, 'type'>['type'] | '*']?: TEffect<TReducer>[]
  } = {}
) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const aRef = useRef<ReducerAction<TReducer>>()

  const dispatchWithMiddleware = (action: ReducerAction<TReducer>) => {
    aRef.current = action

    dispatch(action)
  }

  useEffect(() => {
    const action = aRef.current
    if (action) {
      const type = action.type as Pick<ReducerAction<TReducer>, 'type'>['type']
      const actionEffects = effects[type]
      if (actionEffects) {
        actionEffects.forEach((effect: any) => {
          effect(state, dispatch, action)
        })
      }

      const wildcardEffects = effects['*']
      if (wildcardEffects) {
        wildcardEffects.forEach((effect: any) => {
          effect(state, dispatch, action)
        })
      }
    }

    aRef.current = undefined
  }, [effects])

  return {
    state,
    dispatch: dispatchWithMiddleware,
  }
}
