import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { FilterHandler } from "../redux/action";
import Todo from "./Todo"
export default function TodoList() {
  const dispatch=useDispatch()
     const todos= useSelector(state=>state.todos )
     const filteredTodos=useSelector(state=>state.filteredTodos) 
    const filter=useSelector(state=>state.filter)
    useEffect(()=>{dispatch(FilterHandler())},[todos,filter])

    return (
        <div className="todoList-container">
        {filteredTodos.map((task) => (
          <Todo key={task.id} task={task} />
        ))}</div>
    )
}