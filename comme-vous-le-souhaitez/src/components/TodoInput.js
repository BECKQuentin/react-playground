import React, {useEffect} from "react";

export default function TodoInput() {

  const [input, setInput] = React.useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    alert('soumis')
  }
  useEffect(() => {
    console.log(input)
  },[input])

  return (
  <div>
    <label htmlFor="input">Rentrez une tâche : </label>
    <input id="input" type="text" onChange={handleChange} />
    <button type="submit" onSubmit={handleSubmit}>Ajouter</button>
  </div>);
}
