import React, { Component } from "react";
import Logout from "./Logout";
import { authService } from "./Services/AuthService";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>HOME</h1>
        {authService.checkAuth() ? "" : <Logout history={this.props.history} />}
      </div>
    );
  }
}

export default Home;
