import React, { Component } from "react";
import Logout from "./Logout";
import { authService } from "./Services/AuthService";
import Todos from './Todos';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        {authService.isLoggedIn() ? (<Logout history={this.props.history} />) : ""}
        <h1>HOME</h1>
        <div>
          <Todos />
          <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                      Create new todo
                    </Link>
        </div>
      </div>
    );
  }
}

export default Home;
