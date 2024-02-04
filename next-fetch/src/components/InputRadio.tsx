export const InputRadio = ({
  onChange,
  label,
  selectOption,
  value,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  value: string
  selectOption: string
}) => {
  return (
    <>
      <label
        htmlFor={label}
        className={`px-2 rounded-xl cursor-pointer 
        ${selectOption === value ? 'bg-primary text-white' : 'text-primary bg-white'}`}
      >
        <input
          type="radio"
          className="appearance-none"
          name="checked"
          value={value}
          onChange={onChange}
          checked={selectOption === value}
          id={label}
        />
        {label}
      </label>
    </>
  )
}
