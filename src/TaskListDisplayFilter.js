import React, { useState } from 'react';
const TaskListDisplayFilter = ({ tasks }) => {
  const [filter, setFilter] = useState('');
  const filteredTasks = tasks.filter(
    (task) => task.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h2>Task List Display and Filtering</h2>
      <input
        type="text"
        placeholder="Filter tasks..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
export default TaskListDisplayFilter;