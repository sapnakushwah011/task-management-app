/*  A dialog component for adding or editing tasks*/

import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from 'react-redux';
import { addTask, editTask } from "../../redux/actions";

const TaskDialog = ({ open, handleClose, existingTask }) => {
  const [task, setTask] = useState({ title: '', dueDate: '', completed: false });
  const dispatch = useDispatch();

  
  useEffect(() => {                
    if (existingTask) {
      setTask(existingTask);
    } else {
      setTask({ title: '', description: '', dueDate: '', completed: false });
    }
  }, [existingTask]);


 //Handles form submission and dispatches an action to add or edit a task in the Redux store.
 const handleSubmit = (e) => {
    e.preventDefault();
    if (existingTask) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: Date.now() }));
    }
    handleClose(); 
    setTask({...task , title:'', dueDate:""})
  };

  return (
    <>
    <Dialog open={open} onClose={handleClose}  PaperProps={{ style: { width: '600px', maxWidth: '90%'} }}>
      <DialogTitle sx={{background:'rgb(89, 112, 156)', color:'#fff'}}>{existingTask ? "Edit Task" : "Add a New Task"}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Task Title"
            type="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Due Date"
            type="date"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <DialogActions>
          <Button 
              onClick={handleClose} 
              sx={{ 
                bgcolor: 'lightgray', 
                color: 'black', 
                '&:hover': { bgcolor: 'gray', color: 'white' }
              }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              sx={{ 
                bgcolor: 'rgb(89, 112, 156)', 
                color: 'white', 
                '&:hover': { bgcolor: ' blue' } 
              }}
            >
              {existingTask ? "Save Changes" : "Add Task"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default TaskDialog;
