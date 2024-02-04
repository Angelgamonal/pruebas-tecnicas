import Todos from '@/components/Todos'
import { getTodosByUserId } from '@/service/getTodosByUserId'
import moment from 'moment'

export type TodoType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default async function Home() {
  const todos = await getTodosByUserId()
  todos.splice(4)

  return (
    <main className="py-1 px-2">
      <h1 className="text-center m-4 text-5xl">Todo app</h1>

      <section className="max-w-[500px] m-auto bg-white p-4 rounded-xl ">
        <p className="text-gray-700 font-semibold text-lg">
          {moment().format('dddd MMMM DD YYYY')}
        </p>

        <Todos todos={todos} />
      </section>
    </main>
  )
}
