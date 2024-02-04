import { useState } from 'react'
interface Props {
  handleAddTodo: ({ title }: { title: string }) => void
}

export const AddTodo = ({ handleAddTodo }: Props) => {
  const [task, setTask] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!task.trim()) return

    handleAddTodo({ title: task })
    setTask('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  return (
    <form
      className="w-full flex p-1"
      onSubmit={handleSubmit}
      style={{ boxShadow: '0 -1px 0 #797d8b inset' }}
    >
      <input
        type="text"
        className="w-full border-none text-black focus:outline-none focus:border-b-2 focus:bg-transparent "
        placeholder="Add new task..."
        onChange={handleChange}
        value={task}
        name="task"
      />
      <button className="text-primary p-[3px] rounded-lg font-bold">
        Save
      </button>
    </form>
  )
}
