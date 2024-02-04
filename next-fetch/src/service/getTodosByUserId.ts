import { TodoType } from '@/app/page'

export const getTodosByUserId = async () => {
  try {
    const resp = await fetch(
      'https://jsonplaceholder.typicode.com/todos?userId=1',
    )

    const todos: TodoType[] = await resp.json()

    if (!todos) throw new Error('Error in fetch')

    return todos
  } catch (error) {
    console.log('Error in getTodosByUserId->', error)
    return []
  }
}
