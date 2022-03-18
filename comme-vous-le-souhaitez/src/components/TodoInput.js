import React, {useEffect} from "react";

export default function TodoInput() {

  const [input, setInput] = React.useState('')
  const [newtodo, setNewtodo] = React.useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleKeyDown = (e) => {
    if(e.key == 'Enter') {
      setNewtodo(input)
      setInput('')
    } else if (e.key == 'Escape') {
      setInput('')
      console.log(input)
    }
  }

  return (
  <div>
    <label htmlFor="input">Rentrez une tâche : </label>
    <input id="input" type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
  </div>);
}
