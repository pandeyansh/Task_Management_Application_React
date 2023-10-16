import React, { useState } from 'react';
const TaskEditingUpdating = ({ tasks, updateTask }) => {
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const startEditing = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };
  const cancelEditing = () => {
    setEditIndex(null);
    setEditedTask('');
  };
  const saveChanges = () => {
    if (editedTask.trim() !== '') {
      updateTask(editIndex, editedTask);
      setEditIndex(null);
      setEditedTask('');
    }
  };
  return (
    <div>
      <h2>Task Editing and Updating</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editIndex ? (
              <div>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={saveChanges} disabled={!editedTask.trim()}>
                  Save
                </button>
                <button onClick={cancelEditing}>Cancel</button>
              </div>
            ) : (
              <div>
                {task}
                <button onClick={() => startEditing(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskEditingUpdating;