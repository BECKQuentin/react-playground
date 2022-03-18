import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import React from "react";

function App() {

    const [input, setInput] = React.useState('')
    const [newtodo, setNewtodo] = React.useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = (e) => {

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
    <div className="App">
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
      <TodoInput
        onChangeBase={handleChange}
        onKeyDownBase={handleKeyDown}
        onClickBase={handleClick}/>
    </div>
  );
}

export default App;
