import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
