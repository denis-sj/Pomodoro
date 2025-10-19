
function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      type="button"
    >{text}</button>
  )
}

export default Button