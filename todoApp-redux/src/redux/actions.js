export const addTodo = (data) => {
    return {
        type:'todoList/addTodo',
        payload: data
    }
   
}
export const toggleCompleted = (todoId) =>{
    return {
        type:'todoList/toggleCompleted',
        payload: todoId
    }
}
export const deleteTodo = (todoId)=>{
    return {
        type:'todoList/deleteTodo',
        payload:todoId
    }
}
export const editTodo = (data)=>{
    return {
        type:'todoList/editTodo',
        payload:data
    }
}
export const searchFilter = (text)=>{
    return {
        type :'filter/searchFilter',
        payload : text
    }
}