import { useDispatch } from "react-redux";
import { inputfilter } from "../redux/action";
import React from 'react'
export default function Filter  ()  {
    const dispatch=useDispatch()
    const xHandler=(e)=>{
        dispatch ( inputfilter(e.target.value))}
    return (
        <div>
            <select onChange={xHandler} className="Filtering">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}
