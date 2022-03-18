import React, {useEffect} from "react";

export default function TodoInput({onChangeBase, onKeyDownBase, onClickBase}) {



  return (
  <div>
    <label htmlFor="input">Rentrez une tâche : </label>
    <input id="input" type="text" onChange={onChangeBase} onKeyDown={onKeyDownBase} />
    <input type="submit" onClick={onClickBase} />
  </div>);
}
