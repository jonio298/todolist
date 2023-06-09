import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskFormSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleTaskDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <form onSubmit={handleTaskFormSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleTaskInputChange}
          placeholder="Enter a new task..."
          required
        />
        <button className="submit" type="submit">Add Task</button>
      </form>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                className="delete-button"
                onClick={() => handleTaskDelete(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-task">No tasks, add a task</p>
      )}
      {/* Counter for tasks left */}
      <button className="clear" onClick={() => setTasks([])}>Clear All</button>
      <div className="counter">
        Tasks Left: {tasks.length}
      </div>
    </div>
  );
  
}


export default App;