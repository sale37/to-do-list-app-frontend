import React, { Component } from "react";
import { authService } from "../Services/AuthService";
import { Link } from "react-router-dom";

class Todos extends Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      todos: []
    };
  }

  componentDidMount() {
    authService.listTodos().then(response => {
      this.setState({
        todos: response.data
      });
    });
  }

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  render() {
    const { todos } = this.state;
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Todos</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {todos.map(todo => (
                    <Link key={todo.id}
                      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      to={`/${todo.id}`}
                    >
                      <li key={todo.id} style={todo.completed ? {textDecorationLine:'line-through'} : null}> {todo.description} </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
