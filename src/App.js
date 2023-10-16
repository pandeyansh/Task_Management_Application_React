import React, { useState } from 'react';
import UserAuthenticationLogin from './UserAuthenticationLogin';
import TaskEditingUpdating from './TaskEditingUpdating';
import TaskListDisplayFilter from './TaskListDisplayFilter';
import TaskCreationDeletion from './TaskCreationDeletion';
import './App.css';
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(
    'https://www.techchink.com/wp-content/uploads/2021/02/Task-Management-Software.jpg'
  );
  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };
  const handleLogin = (username) => {
    setLoggedInUser(username);
    setBackgroundImage('url("new-background-image-url.jpg")');
  };
  return (
    <div style={{ backgroundImage: backgroundImage }}>
      {loggedInUser ? (
        <div>
          <h1>Welcome, {loggedInUser}!</h1>
          <TaskCreationDeletion tasks={tasks} setTasks={setTasks} />
          <TaskListDisplayFilter tasks={tasks} />
          <TaskEditingUpdating tasks={tasks} updateTask={updateTask} />
        </div>
      ) : (
        <UserAuthenticationLogin onLogin={handleLogin} />
      )}
    </div>
  );
};
export default App;