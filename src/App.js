import "./App.css";
import React from "react";
import ToDoInputForm from "./components/ToDoInputForm";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [toDos, setToDos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  const AddItem = (text) => {
    const newToDos = [...toDos, { text: text, isCompleted: false }];
    setToDos(newToDos);
  };

  const handleDone = (e) => {
    const listItem = e.target.parentNode.parentNode;
    let changeItem = toDos.filter(
      (toDo) => toDo.text === listItem.textContent.slice(0, -4)
    )[0];

    setToDos((toDos) => {
      const updatedTodos = toDos.map((todo) => {
        if (todo === changeItem) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  const DoneBtn = (item) => {

    return (
      <button
        type="button"
        className="btn btn-outline-secondary m-1"
        onClick={handleDone}
      >
        {!item.condition ? "✅" : "❌"}
      </button>
    );
  };

  const habdleDelete = (e) => {
    const listItem = e.target.parentNode.parentNode;
    let updatedToDos = [...toDos];
    updatedToDos = updatedToDos.filter(
      (toDo) => toDo.text !== listItem.textContent.slice(0, -4)
    );
    console.log("updated: ", updatedToDos);
    setToDos(updatedToDos);
  };

  const deleteBtn = (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={habdleDelete}
    >
      🗑️
    </button>
  );

  return (
    <div className="App">
      <h1 className="display-1">ToDo-List</h1>
      <ToDoInputForm AddItem={AddItem} />
      <ul className="list-group ">
        {toDos.map((todo, index) => {
          console.log('passing: ', todo.isCompleted);
          return (
            <ToDoItem
              key={index}
              todo={todo}
              index={index}
              btn1={< DoneBtn condition={todo.isCompleted} />}
              btn2={deleteBtn}
            />
          );
        })}
      </ul>
      <div id="doneItems" className="border-top"></div>
    </div>
  );
}

export default App;