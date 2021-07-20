import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              handleCheckboxChange={this.props.handleCheckboxChange}
              deleteTodo={this.props.deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
export default TodoList;
