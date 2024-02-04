interface Props {
  children: string
  onClick?: () => void
}

export const ButtonFilter = ({ children, onClick }: Props) => {
  return (
    <button className="bg-primary px-2 rounded-xl" onClick={onClick}>
      {children}
    </button>
  )
}
