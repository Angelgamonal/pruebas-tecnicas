'use client'

import { ListOfTodoType } from '@/interfaces/interfaces'
import { Item } from './Item'
import { Options } from './Options'
import { AddTodo } from './AddTodo'
import { useTodos } from '@/hooks/useTodos'
import { useFiltersTodos } from '@/hooks/useFiltersTodos'

export default function Todos({ todos: todos_ }: { todos: ListOfTodoType }) {
  const { todos, handleAddTodo, handleCompleted, removeTodo } = useTodos({
    todos_,
  })

  const { todosFilter, getAllTodos, getCompletedTodos, getPendingTodos } =
    useFiltersTodos({
      todos,
    })

  return (
    <section>
      <Options
        lengthTodos={todos.length}
        getCompletedTodos={getCompletedTodos}
        getPendingTodos={getPendingTodos}
        getAllTodos={getAllTodos}
      />
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul className="m-auto max-h-[50vh] overflow-auto">
        {todosFilter.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            handleCompleted={handleCompleted}
          />
        ))}
      </ul>
    </section>
  )
}
