// import React, { Component } from "react";
// import { authService } from "./Services/AuthService";

// class Delete extends Component {
//     _isMounted = false;

//   constructor(props) {
//     super(props);
//     this.state={
//         todo: {}
//     }

//     this.handleDelete = this.handleDelete.bind(this);
//   }

//   componentDidMount() {
//     this._isMounted = true;

//     const todoId = this.props.match.params.id;

//      console.log(this.props.match.params.id);
    
//     authService.showTodo(todoId).then(response => {
//       this.setState({
//         todo: response.data
//       });
//     });
//   }

//   componentWillMount() {
//     this._isMounted = false;
//   }

//   handleDelete(event) {
//     event.preventDefault();

//     const { history } = this.props;

//     authService
//       .deleteTodo(this.state.todo.id)
//       .then(res => history.push("/home"))
//       .catch(res => this.setState({ deleteEroor: true }));
//   }

//   render() {
//     return <button onClick={this.handleDelete}>LOGOUT</button>;
//   }
// }

// export default Delete;