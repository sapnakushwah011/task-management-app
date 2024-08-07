import React from 'react';
import './Cards.css';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Assignment, AssignmentLate, Task, Timelapse } from '@mui/icons-material';

const Cards = () => {

  // Access tasks from the Redux store
  const tasks = useSelector((state) => state.tasks.tasks);

  // Compute card data
 
  const allTasksCount = tasks.length;                                               // Total number of tasks
  const completedTasksCount = tasks.filter(task => task.completed).length;          // Number of completed tasks
  const incompletedTasksCount = tasks.filter(task => !task.completed).length;

  const currentDate = dayjs();
  const overdueTasksCount = tasks.filter(task => !task.completed && dayjs(task.dueDate).isBefore(currentDate)).length;   // Number of overdue tasks


  // Define card data with icons, titles, descriptions, and background styles
  const cardData = [
    { id: 1, icon: <Assignment style={{ color: '#fff', fontSize: '35px' }} />, title: 'All Tasks', description: allTasksCount, backgroundImage: 'linear-gradient(to right, #1e3a8a, #3b82f6)' },
    { id: 2, icon: <Task style={{ color: '#fff', fontSize: '35px' }} />, title: 'Completed Tasks', description: completedTasksCount, backgroundImage: 'linear-gradient(to right, #004d00, #008000)' },
    { id: 3, icon: <AssignmentLate style={{ color: '#fff', fontSize: '35px' }} />, title: 'Incomplete Tasks', description: incompletedTasksCount, backgroundImage: 'linear-gradient(to right, #b71c1c, #f44336)' },
    { id: 4, icon: <Timelapse style={{ color: '#fff', fontSize: '35px' }} />, title: "Overdue Tasks", description: overdueTasksCount, backgroundImage: 'linear-gradient(to right, #ff9f43, #fdd835)' } 
  ];

  return (
    <div className="card-container">
      {cardData.map(card => (
        <div key={card.id} className="card" style={{ backgroundImage: card.backgroundImage }}>
          <div className='title'>
            {card.icon} {card.title}
          </div>
          <div className='desc'>{card.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
