import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {
 
  const [tasklist, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [count, setcount] = useState(0);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTask("");
      setTaskList([...tasklist, taskDetails]);
     
    }
    setcount(count+1);
  };

  const deletetask = (e, id) => {
    // e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
    setcount(count-1);
  };

  const taskCompleted = (e, id) => {
    // e.preventDefault();
    //let's find index of element
    const element = tasklist.findIndex((elem) => elem.id ===id);

    //copy array into new variable
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (

    <>
    <div className="todo">
        <h1 className="header">pending tasks({count})</h1>

      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..."
      />
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>
      <br />
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value}
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>

              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
    </>
  );
}

export default TodoApp;