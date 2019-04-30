import React, { Component } from "react";
import { authService } from "../Services/AuthService";
import UpdateTodo from './UpdateTodo';
import { Link } from 'react-router-dom';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: {}
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
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

  handleDone = (event) =>{
    event.preventDefault();

    const { history } = this.props;

    const todo = {
      id: this.state.todo.id,
      description: this.state.todo.description,
      completed: true
    }

    authService.updateTodo(todo).then(res => history.push('/home'));
  }

  handleUndone = (event) =>{
    event.preventDefault();

    const { history } = this.props;

    const todo = {
      id: this.state.todo.id,
      description: this.state.todo.description,
      completed: false
    }

    authService.updateTodo(todo).then(res => history.push('/home'));
  }

  render() {
    const { todo } = this.state;
    let button;

    if (this.state.todo.completed) {
      button = <button onClick={this.handleUndone}>Mark as Undone</button>;
    } else {
      button = <button onClick={this.handleDone}>Mark as Done</button>;
    }

    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Todo:</div>
              <div className="card-body" />
              <div>{todo.description}</div>
              {button}
              <button onClick={this.handleDelete}>Delete</button>
              <Link to={`/update/${this.state.todo.id}`}><button type="button">Update</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
