import { ADDTODO, DELETETODO, DONETODO, EDITTODO, FILTERING, FILTERTODO } from "./action-types"


export const deleteHandler=(ID)=>{
    return{
        type:DELETETODO,
        payload:ID
    }}
    export const doneHandler=(ID)=>{
        return{
            type:DONETODO,
            payload:ID
        }
    }
    export const addHandler=(newTask)=>{
        return{
            type:ADDTODO,
            payload:newTask
        }
    }
    export const editHandler=(ID,editText)=>{
        return{
            type:EDITTODO,
            payload:{ID, editText}
        }
    }
    export const inputfilter =(x)=>{
        return {
            type: FILTERTODO,
            payload:{x}
    
        }
    }
    export const FilterHandler =()=>{
        return {
            type: FILTERING
               
        }
    }
