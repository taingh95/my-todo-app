import "./App.css";
import React, { useState } from "react";
import Header from "./components/layouts/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

//npm
import uuid from "uuid";

// initial data
const todosData = [
  {
    id: 1,
    title: "Setup development environment",
    completed: true,
  },
  {
    id: 2,
    title: "Develop website and add content",
    completed: false,
  },
  { id: 3, title: "Deploy to live server", completed: false },
];

function App() {
  const [todos, setTodo] = useState(todosData);

  //check compeleted todo
  const handleCheckboxChange = (id) => {
    setTodo(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  //delete todo
  const deleteTodo = (id) => {
    setTodo(todos.filter(todo => {
      return todo.id !== id
    }))
  };

  //add todo
  const addTodo = title => {
    if(title) {
      let todo = {
        id: uuid.v4(),
        title: title,
        completed: false
      }
      setTodo([...todos,todo])
    } 
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          handleCheckboxChange={handleCheckboxChange}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
