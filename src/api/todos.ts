import { ITodo } from 'src/api/types'
import { URL } from 'src/config'

export const fetchAllTodos = () =>
  fetch(`${URL}/todos`).then<ITodo[]>((response) => response.json())
