import React, { Component } from "react";
import { authService } from "../Services/AuthService";
import { withRouter } from 'react-router-dom';


class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout= event => {
    event.preventDefault();

    const { history } = this.props;

    this.setState({ isLoggedIn: false });

    authService
      .logout()
      .then(res => history.push("/login"))
      .catch(res => this.setState({ logoutError: true }));

  }

  render() {
    return <button onClick={this.handleLogout}>Logout</button>;
  }
}

export default withRouter(Logout);