
import { ADDTODO, DELETETODO , DONETODO , EDITTODO , FILTERING, FILTERTODO } from "./action-types"
const initialState={
    todos:[
        {
            ID: 1,
            text: "clean your room",
            isDone: false,
        },
        {
            ID: 2,
            text: "feed the dog ",
            isDone: false,
        },
        ], 
        filter:'All',
        filteredTodos:[]
        
}
const todosReducer=(state=initialState, action)=>{
    switch (action.type) {
        case DELETETODO:return{
            ...state,
            todos: state.todos.filter(el=> el.ID!== action.payload )
        }
        case DONETODO: return{
            ...state,
            todos: state.todos.map(el=>  el.ID=== action.payload ?  {...el, isDone:!el.isDone }:el )
        }
        case ADDTODO: return{
            ...state,
            todos: [...state.todos, action.payload]
        }
        case EDITTODO:return{
            ...state, 
            todos:state.todos.map(todo=> todo.ID===action.payload.ID? {...todo, text:action.payload.editText}:todo )
        }
        case FILTERTODO :
            return {
                ...state,
                filter:action.payload.x
            }
            case FILTERING :
        return {
            ...state,
            filteredTodos:  state.filter==="Completed"? state.todos.filter(el=>el.isDone===true):
                            state.filter==="Uncompleted"? state.todos.filter(el=>el.isDone===false):
                            state.filter==="All"? state.todos:
                            null
        }
        default:return state
    }}
    export default todosReducer
