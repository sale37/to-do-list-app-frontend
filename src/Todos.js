import React, { Component } from "react";
import { authService } from "./Services/AuthService";
import { Link } from 'react-router-dom';


class Todos extends Component {
  constructor() {
    super();
    this.state = {
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
                    <Link
                      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      to={`/${todo.id}`}
                    >
                      <li key={todo.description}>{todo.description}</li>
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
