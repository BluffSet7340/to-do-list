import React, { useState } from "react";

function ToDoList() {
  // a useState hook, initialized to an empty array
  const [task, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //when user types into the textbox
  function handleInputChange(event) {}

  function addTask() {}

  //index of item that user wants to delete
  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  //extra that I want to implement
  //when user wants to change the name of the task
  function editTask() {}

  return (
    <div classNameName="to-do-list">
      <h1>To-Do List</h1>
      <div>
        {/* for taking in user input, reduced width of search bar only so that the
        search bar and button appear side by side */}
        <form className="d-flex" role="search" >
          <input
            className="form-control"
            type="text"
            placeholder="Enter a Task..."
            aria-label="Search"
            value={newTask}
            style={{width:"200px"}}
            // When the input is changed, we call the Javascript function
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Enter Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default ToDoList;
