import React, { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import Header from "../../Components/Header/Header";
import "./Home.css";
import TaskDialog from "../TaskDialog/TaskDialog";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Delete,
  Edit,
  CheckCircleOutline,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../../redux/actions";
import dayjs from "dayjs";
import Swal from 'sweetalert2';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);


  // Opens the TaskDialog for adding a new task
  const handleClickOpen = () => {
    setEditingTask(null);
    setOpen(true);
  };

   // Closes the TaskDialog
  const handleClose = () => {
    setOpen(false);
  };

  // edit an existing task
  const handleEdit = (task) => {
    setEditingTask(task);
    setOpen(true);
  };


  // Dispatches an action to delete a task
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTask(id));
      }
    });
  };


  // Dispatches an action to toggle the completion status of a task
  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };


   // Handles filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter and sort tasks based on the selected filter and due date
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  const currentDate = dayjs();             // Get the current date using dayjs

  return (
    <>
      <Header />
      <div className="home">
        <Cards />
        <div className="home-container">
          <div className="home-container-top">
            <select value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="completed">Completed tasks</option>
              <option value="incomplete">Incomplete tasks</option>
            </select>

            <button className="add-task-btn" onClick={handleClickOpen}>
              +
            </button>
          </div>

          <div className="home-container-display-list">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={{ background: "gray" }}>
                    <TableCell
                      sx={{
                        fontSize: "1.2rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Task
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.2rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.2rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Due Date
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.2rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>
                          <span className={ task.completed ? "cell-completed" : "cell-incomplete" } >{task.completed ? "Completed" : "Incomplete"}</span>
                      </TableCell>
                      <TableCell>
                        {task.dueDate}
                        {!task.completed &&
                          dayjs(task.dueDate).isBefore(currentDate) && (
                            <div style={{ color: "red", marginLeft: "10px" }}>
                              Overdue
                            </div>
                          )}
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleToggle(task.id)}>
                          {task.completed ? (
                            <CheckCircleOutline style={{ color: "green" }} />
                          ) : (
                            <RadioButtonUnchecked style={{ color: "red" }} />
                          )}
                        </IconButton>
                        <IconButton onClick={() => handleEdit(task)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(task.id)}>
                          <Delete style={{color:'#d63031'}} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <TaskDialog
          open={open}
          handleClose={handleClose}
          existingTask={editingTask}
        />
      </div>
    </>
  );
};

export default Home;
