import React, { Component } from "react";
import { authService } from "./Services/AuthService";

class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      description: '',
      errors: []
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
    this.hasErrorFor = this.hasErrorFor.bind(this);
    this.renderErrorFor = this.renderErrorFor.bind(this);
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    const todoId = this.props.match.params.id;
    
    authService.showTodo(todoId).then(response => {
      this.setState({
        todo: response.data
      });
    });
  }


  handleUpdateTodo = event => {
    event.preventDefault();

    const { history } = this.props;

    const todo = {
      id: this.state.todo.id,
        description: this.state.description
    };

    authService
      .updateTodo(todo)
      .then(res => history.push("/home"))
      .catch(res => this.setState({ todoError: true }));
  };


  hasErrorFor(field) {
    return this.state.errors[field];
  }

  renderErrorFor(field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className="invalid-feedback">
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      );
    }
  }

  render() {
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Update todo</div>
              <div className="card-body">
                <form onSubmit={this.handleUpdateTodo}>
                  <div className="form-group">
                    <label htmlFor="name">Description</label>
                    <input
                      id="description"
                      type="text"
                      className={`form-control ${
                        this.hasErrorFor("description") ? "is-invalid" : ""
                      }`}
                      name="description"
                      value={this.state.description}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor("description")}
                  </div>
                  <button className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateTodo;