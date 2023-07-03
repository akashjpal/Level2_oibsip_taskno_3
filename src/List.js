import React from "react";
import InputList from "./InputList";
export default function List() {
  const [task, setTask] = React.useState(["Here, your Todo Task will appear"]);
  const [completedList, setCompletedList] = React.useState([
    "Here, your Completed Task will appear"
  ]);

  function addTask() {
    const inputTask = document.querySelector(".todolist--input").value;
    console.log(inputTask);
    setTask((prevState) => {
      return [...prevState, inputTask];
    });
  }

  function deleteTask(index) {
    setCompletedList((prevState) => {
      return [...prevState, task[index]];
    });
    setTask((prevState) => prevState.filter((element, i) => i !== index));
  }
  // Here, i also represents index because index already used therefore we used i to represent Index.
  function deleteCompletedTask(index) {
    setCompletedList((prevState) =>
      prevState.filter((element, i) => i !== index)
    );
  }

  const taskList = task.map((task, index) => (
    <div key={index} className="eachTask">
      <p>{task}</p>
      <button
        onClick={() => {
          deleteTask(index);
        }}
      >
        Delete
      </button>
    </div>
  ));

  const completedTaskList = completedList.map((task, index) => (
    <div key={index} className="eachTask">
      <p>{task}</p>
      <button
        onClick={() => {
          deleteCompletedTask(index);
        }}
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div>
      <InputList addToTask={addTask} />
      <div className="task--list">
        <h2>Assigned Task</h2>
        <div className="eachTaskList">{taskList}</div>
      </div>
      <div className="task--list">
        <h2>Completed Task</h2>
        <div className="eachTaskList">{completedTaskList}</div>
      </div>
    </div>
  );
}
