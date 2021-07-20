import React from "react";
class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          className="input-text"
          value={this.state.title}
          onChange={this.handleOnChange}
        />
        <input type="submit" value="Submit" className="input-submit" />
      </form>
    );
  }
}
export default AddTodo;
