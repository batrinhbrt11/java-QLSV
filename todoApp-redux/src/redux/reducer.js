const initState = {
  filter: {
    search: "",
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "Low" },
    { id: 2, name: "Learn Redux", completed: true, priority: "Medium" },
    { id: 3, name: "do exercise", completed: false, priority: "High" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "filter/searchFilter":
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload,
        },
      };
    case "todoList/deleteTodo": {

      return {
        ...state,
        todoList: [...state.todoList.filter((todo) => todo.id !== action.payload)],
      };
    }
    case "todoList/editTodo": {
      console.log(action)
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) =>
            todo.id === action.payload.todoId
              ? { ...todo, name: action.payload.nameText}
              : todo
          ),
        ],
      };
    }
    case "todoList/toggleCompleted": {
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        ],
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
