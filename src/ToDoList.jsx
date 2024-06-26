import React, { useState } from "react";

function ToDoList() {
  // a useState hook, initialized to an empty array
  const [tasks, setTasks] = useState([
   
  ]);
  const [newTask, setNewTask] = useState("");

  //when user types into the textbox
  function handleInputChange(event) {
    //setNewTask is the function that updates the state of newTask
    // we access the event paramter, its target and then its value
    setNewTask(event.target.value);
  }

  function addTask() {

    //to make sure user can't add an empty task
    if(newTask.trim()!==""){
        // spreads all the tasks using "...tasks" and use the newTasks variable to add new tasks
    setTasks(t=> [...t, newTask]);
    // does something to add the new task?
    setNewTask("");
    }
  }

  //index of item that user wants to delete
  function deleteTask(index) {
    // creates new array of updated tasks, depending on the index selected by the user
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

  }

  function moveTaskUp(index) {

    if(index > 0){
        const updatedTasks = [...tasks];
        //use array destructuring to swap two elements in the array
        [updatedTasks[index], updatedTasks[index-1]] = 
        [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length-1){
        const updatedTasks = [...tasks];
        //use array destructuring to swap two elements in the array
        [updatedTasks[index], updatedTasks[index+1]] = 
        [updatedTasks[index+1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }

  function editTask(){

  }

  //extra that I want to implement
  //when user wants to change the name of the task
  function editTask() {}

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div className="d-flex justify-content-center">
        {/* for taking in user input, reduced width of search bar only so that the
        search bar and button appear side by side */}
        <input
          className=""
          type="text"
          placeholder="Enter a Task..."
          aria-label="Search"
          value={newTask}
          // style={{ width: "200px" }}
          // When the input is changed, we call the Javascript function
          onChange={handleInputChange}
        />
        {/* when button is clicked, we have a callback to the function addTask */}
        <button
          className="btn btn-outline-success add-button"
          type="submit"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <ol>
        {/* in tasks, each "task" is mapped to an <li> tag. We refer to each task as the variable "task" */}
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              type="button"
              className="btn btn-danger delete-button"
              // with regards to a callback, when passed in an argument, the function is executed right away.
              //To avoid this, we use an arrow function
              onClick={() => {
                deleteTask(index);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-info move-button"
              // with regards to a callback, when passed in an argument, the function is executed right away.
              //To avoid this, we use an arrow function
              onClick={() => {
                moveTaskUp(index);
              }}
            >
              Up
            </button>
            <button
              type="button"
              className="btn btn-info move-button"
              // with regards to a callback, when passed in an argument, the function is executed right away.
              //To avoid this, we use an arrow function
              onClick={() => {
                moveTaskDown(index);
              }}
            >
              Down
            </button>

          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
