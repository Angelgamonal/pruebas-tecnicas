import { ListOfTodoType, TodoId, TodoType } from '@/interfaces/interfaces'
import { useEffect, useState } from 'react'

export const useTodos = ({ todos_ }: { todos_: ListOfTodoType }) => {
  const [todos, setTodos] = useState<ListOfTodoType | []>([])

  const removeTodo = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id)

    setTodos(newTodos)
  }

  const handleCompleted = ({ id }: TodoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        return todo
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: { title: string }) => {
    const todo: TodoType = {
      title,
      id: Math.random(),
      completed: false,
      userId: 1,
    }
    const newTodo = [...todos, todo]

    setTodos(newTodo)
  }

  useEffect(() => {
    setTodos(todos_)
  }, [todos_])

  return {
    todos,
    handleAddTodo,
    handleCompleted,
    removeTodo,
  }
}
