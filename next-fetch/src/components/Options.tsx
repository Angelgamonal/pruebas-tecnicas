'useclient'

import { useState } from 'react'
import { InputRadio } from './InputRadio'

type ArrowFunction = () => void

export const Options = ({
  lengthTodos,
  getCompletedTodos,
  getPendingTodos,
  getAllTodos,
}: {
  lengthTodos: number
  getCompletedTodos: ArrowFunction
  getPendingTodos: ArrowFunction
  getAllTodos: ArrowFunction
}) => {
  const [selectedOption, setSelectedOption] = useState('all')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <article className="flex justify-between items-center my-3 flex-wrap gap-2">
      <span className="text-[#8a9ca5]">{lengthTodos} tasks</span>

      <form className="flex gap-2">
        <InputRadio
          label="All"
          value="all"
          onChange={(event) => {
            handleOptionChange(event)
            getAllTodos()
          }}
          selectOption={selectedOption}
        />
        <InputRadio
          label="Completed"
          value="completed"
          onChange={(event) => {
            handleOptionChange(event)
            getCompletedTodos()
          }}
          selectOption={selectedOption}
        />
        <InputRadio
          label="Pending"
          value="pending"
          onChange={(event) => {
            handleOptionChange(event)
            getPendingTodos()
          }}
          selectOption={selectedOption}
        />
      </form>
    </article>
  )
}
