import React from "react";
import { useDispatch } from "react-redux";
import { deleteHandler, doneHandler } from "../redux/action";
import EditTodo from "./EditTodo"
export default function Todo({task}) {
const dispatch=useDispatch()
    return (
    <div className="todo-container">
        <h4 style={ task.isDone ? {textDecoration:'line-through'}:{}   }>{task.text}</h4>
        <div className='btns'>
        <button onClick={()=>{ dispatch(doneHandler(task.ID)) }} >Done</button>
        <button onClick={()=>dispatch(deleteHandler(task.ID)) }  >Delete</button>
        <EditTodo task={task}/>
        </div>
    </div>
);
}