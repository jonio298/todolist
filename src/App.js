import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showClearModal, setShowClearModal] = useState(false);

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

  const handleClearAll = () => {
    setShowClearModal(true);
  };

  const confirmClearAll = () => {
    setTasks([]);
    setShowClearModal(false);
  };

  const cancelClearAll = () => {
    setShowClearModal(false);
  };

  return (
    <div className="todo-list">
      <h1 className="app-title">Get Done List</h1>
      <form onSubmit={handleTaskFormSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleTaskInputChange}
          placeholder="Enter a new task..."
          required
          aria-label="Enter a new task"
        />
        <button className="submit" type="submit">
          Add Task
        </button>
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
      <div className="counter">Tasks Left: {tasks.length}</div>
      {/* Clear All button */}
      <button className="clear" onClick={handleClearAll}>
        Clear All
      </button>

      {showClearModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to clear all tasks?</p>
            <button className="confirm" onClick={confirmClearAll}>
              Yes
            </button>
            <button className="cancel" onClick={cancelClearAll}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
