export type TodoType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type ListOfTodoType = TodoType[]

export type TodoId = Pick<TodoType, 'id'>

export type RemoveTodoById = ({ id }: TodoId) => void
export type HandleCompleted = ({ id }: TodoId) => void
