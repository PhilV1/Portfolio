function Button({ children }) {
  return (
    <>
      <button className="bg-orange-400  border-2 py-1 px-2 rounded-md font-bold justify-center flex  hover:bg-white hover:text-orange-400 duration-500 ease-in-out">
        {children}
      </button>
    </>
  )
}

export default Button
