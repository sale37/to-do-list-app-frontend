import React, { Component } from "react";
import Logout from "./Logout";
import { authService } from "./Services/AuthService";
import Todos from './Todos';

class Home extends Component {
  render() {
    return (
      <div>
        {authService.checkAuth() ? "" : <Logout history={this.props.history} />}
        <h1>HOME</h1>
        <div>
          <Todos />
        </div>
      </div>
    );
  }
}

export default Home;
