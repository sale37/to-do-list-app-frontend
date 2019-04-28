import React, { Component } from "react";
import { authService } from "./Services/AuthService";
import UpdateTodo from './UpdateTodo';
import { Link } from 'react-router-dom';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: {}
    };
  }

  componentDidMount() {
    const todoId = this.props.match.params.id;
    
    authService.showTodo(todoId).then(response => {
      this.setState({
        todo: response.data
      });
    });
  }

  handleDelete=(event)=>{
    event.preventDefault();

    authService.deleteTodo(this.state.todo.id).then(response => this.props.history.push('/home'));
  }

  render() {
    const { todo } = this.state;

    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Todo:</div>
              <div className="card-body" />
              <div>{todo.description}</div>
              <button onClick={this.handleDelete}>DELETE</button>
              <Link to={`/update/${this.state.todo.id}`}>Update</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
