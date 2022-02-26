import { ITodo } from 'src/api/types'

export interface ITodosState {
  data: ITodo[]
  isLoading: boolean
}
