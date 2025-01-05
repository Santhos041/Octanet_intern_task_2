import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(t => (
          <li key={t.id} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            <span onClick={() => handleToggleTask(t.id)}>{t.text}</span>
            <button onClick={() => handleDeleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;