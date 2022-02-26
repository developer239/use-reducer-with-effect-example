import {
  Reducer,
  ReducerAction,
  ReducerState,
  useEffect,
  useReducer,
  useRef,
} from 'react'
import { TEffect } from 'src/hooks/useReducerWithEffects/types'

export const useReducerWithMiddleware = <TReducer extends Reducer<any, any>>(
  reducer: TReducer,
  initialState: ReducerState<TReducer>,
  effects: TEffect<TReducer>[] = []
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
      effects.forEach((effect) => {
        effect(state, dispatch, action)
      })
    }

    aRef.current = undefined
  }, [effects])

  return {
    state,
    dispatch: dispatchWithMiddleware,
  }
}
