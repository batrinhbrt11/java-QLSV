const initState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "Low" },
    { id: 2, name: "Learn Redux", completed: false, priority: "Medium" },
    { id: 3, name: "do exercise", completed: false, priority: "High" },
  ],
};
const rootReducer = (state = initState, action) => {
    
  switch (action.type) {
    case "todoList/addTodo":
      return{
          ...state,
          todoList:[
              ...state.todoList,
              action.payload,
          ]
      };
    case "filter/searchFilter":
        return {
            ...state,
            filter:{
                ...state.filter,
                search:action.payload
            }
        }
    default:
        return state
  }
};
export default rootReducer;
