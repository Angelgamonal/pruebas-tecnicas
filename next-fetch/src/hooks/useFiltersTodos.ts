import { ListOfTodoType } from '@/interfaces/interfaces'
import { useEffect, useState } from 'react'

export const useFiltersTodos = ({
  todos = [],
}: {
  todos: ListOfTodoType | []
}) => {
  const [todosFilter, setTodosFilter] = useState<ListOfTodoType | []>([])

  const getCompletedTodos = () => {
    const newTodo = todos.filter((todo) => todo.completed === true)
    setTodosFilter(newTodo)
  }

  const getPendingTodos = () => {
    const newTodo = todos.filter((todo) => todo.completed === false)
    setTodosFilter(newTodo)
  }

  const getAllTodos = () => {
    setTodosFilter(todos)
  }
  useEffect(() => {
    setTodosFilter(todos)
  }, [todos])

  return { todosFilter, getCompletedTodos, getPendingTodos, getAllTodos }
}
