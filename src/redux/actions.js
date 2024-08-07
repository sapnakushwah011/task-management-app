// Action Types
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';


// Action Creators....

//Action creator for adding a new task.
export const addTask = (task) => ({ 
    type: ADD_TASK, 
    payload: task 
});

//Action creator for editing an existing task.
export const editTask = (task) => ({ 
    type: EDIT_TASK, 
    payload: task 
});


//Action creator for deleting a task.
export const deleteTask = (id) => ({ 
    type: DELETE_TASK, 
    payload: id
 });


//Action creator for toggling the completion status of a task.
export const toggleTask = (id) => ({ 
    type: TOGGLE_TASK, 
    payload: id 
});