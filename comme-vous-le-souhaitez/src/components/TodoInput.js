import React from "react";

export default function TodoInput() {




  return (
  <div>
    <label htmlFor="input">Rentrez une tâche : </label>
    <input id="input" type="text" onChange={handleChange} />
  </div>);
}
