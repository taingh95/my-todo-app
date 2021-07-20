import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/layouts/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

//npm
import axios from "axios";
import Footer from "./components/layouts/Footer";

function App() {
  const [todos, setTodo] = useState([]);

  //get API DB
  useEffect(() => {
    const config = {
      params: {
        _limit: 5,
      },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((response) => setTodo(response.data));
  }, []);

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
    setTodo(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  //add todo
  const addTodo = (title) => {
    if (title) {
      let todo = {
        title: title,
        completed: false,
      };
      axios
        .post("https://jsonplaceholder.typicode.com/todos", todo)
        .then((response) => {
          setTodo([...todos, response.data]);
        });
    }
  };

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
        <Footer />
      </div>
    </div>
  );
}

export default App;
