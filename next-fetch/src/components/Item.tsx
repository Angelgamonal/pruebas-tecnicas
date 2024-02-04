import Image from 'next/image'
import { TodoType } from '../app/page'
import { HandleCompleted, RemoveTodoById } from '../interfaces/interfaces'

export const Item = ({
  todo,
  handleCompleted,
  removeTodo,
}: {
  todo: TodoType
  handleCompleted: HandleCompleted
  removeTodo: RemoveTodoById
}) => {
  const { completed, id, title } = todo

  return (
    <>
      <li className="group/item m-2 hover:bg-slate-100 text-black p-2 rounded flex items-center relative">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            handleCompleted({ id })
          }}
          className="w-[18px] h-[18px] cursor-pointer mr-2 rounded-[50%] border-2 border-[#bbbdc7] appearance-none 
          checked:bg-[#4acea3] checked:border-[#38bb90] checked:bg-10 checked:bg-center checked:bg-no-repeat 
          checked:bg-[url('/check.svg')]"
        />
        <label
          htmlFor=""
          className={`line-clamp-1 ${completed ? 'line-through' : ''}`}
        >
          {title}
        </label>
        <button
          className="visible group-hover/item:visible lg:invisible"
          onClick={() => {
            removeTodo({ id })
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20px"
            height="20px"
            className="fill-red-700 absolute right-0 mr-1 top-1/4"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
          </svg>
        </button>
      </li>
    </>
  )
}
