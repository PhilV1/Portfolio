function Button({ children }) {
  return (
    <>
      <button className="bg-orange-400  border-2 py-1 px-2 rounded-md font-bold justify-center flex hover:text-white">
        {children}
      </button>
    </>
  )
}

export default Button
