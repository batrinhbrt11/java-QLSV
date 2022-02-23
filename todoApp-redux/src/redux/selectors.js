import { createSelector } from "reselect";

export const todoListSearch = (state) => state.filter.search;
export const todoListSelector = (state) => state.todoList;
// export const todoListSelector = (state) => {

//     const todosRemaining = state.todoList.filter((todo) =>{
//         return todo.name.toUpperCase().includes(state.filter.search.toUpperCase())
//     })
//     return todosRemaining
// }

export const todosRemaining = createSelector(
  todoListSelector,
  todoListSearch,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.toUpperCase().includes(searchText.toUpperCase());
    });
  }
);
