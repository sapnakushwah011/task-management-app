import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK } from '../actions';

// Initial state of the tasks
const initialState = {
  tasks: [],  
};


// Reducer function to manage tasks state
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:                                              
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:                                            
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task),
      };
    case DELETE_TASK:                                      
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASK:                                 
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task),
      };
    default:
      return state;
  }
};

export default taskReducer;