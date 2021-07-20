import React from "react";

class TodoItem extends React.Component {
  render() {
    // destructoring
    const { id, title, completed } = this.props.todo;

    return (
      <li key={id} className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleCheckboxChange(id)}
        />
        <span className={completed ? "completed" : null}>{title}</span>

        <button className="btn-style" onClick={() => this.props.deleteTodo(id)}>x</button>
      </li>
    );
  }
}
export default TodoItem;
