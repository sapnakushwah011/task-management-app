import React, { useState } from 'react';
import './Header.css';
import TaskDialog from '../../Pages/TaskDialog/TaskDialog';
import { Add } from '@mui/icons-material';

const Header = () => {
  const [open, setOpen] = useState(false);

  // Opens the TaskDialog
  const handleClickOpen = () => {
    setOpen(true);
  };


  // Closes the TaskDialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='header'>
       <h2>TASK MANAGER </h2> 
       <button className="add-task-btn" onClick={handleClickOpen}>
           <Add/> Add Task
      </button>
      <TaskDialog
          open={open}
          handleClose={handleClose}
        />
   </div>
  )
}

export default Header