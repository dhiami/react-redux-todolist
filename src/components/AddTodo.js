import react from 'react'
import { useState } from 'react';
import { addHandler } from '../redux/action';
import { useDispatch } from 'react-redux';
import Filter from './Filter';
  export default function Addtodos  ()  {
    const [newText, setNewText] = useState("");
    const dispatch = useDispatch();
    const addtodos = () => {
      dispatch(
        addHandler({
          ID: Math.random(),
          text: newText,
          isDone: false,
        })
      );
      setNewText("");
    };  
    return(
            <div>
  <div className="Userinput">
    <input type="text" onChange={(e) => setNewText(e.target.value)} autoFocus placeholder="Add your tasks here"></input>
  <button type="add" onClick={addtodos} >+</button>
  </div>
  <Filter/>
            </div>
    )
};