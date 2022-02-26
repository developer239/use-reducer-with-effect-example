import { Dispatch, Reducer, ReducerAction, ReducerState } from 'react'

export type TEffect<TReducer extends Reducer<any, any>> = (
  state: ReducerState<TReducer>,
  dispatch: Dispatch<ReducerAction<TReducer>>,
  action: ReducerAction<TReducer>
) => void
