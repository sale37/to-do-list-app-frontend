import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import { authService } from './Services/AuthService';
import Home from './Home';
import CreateTodo from './CreateTodo';
import Todo from './Todo';
import UpdateTodo from './UpdateTodo';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/register' component={Register} />,
            <Route exact path='/login' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/create' component={CreateTodo}/>
            <Route exact path='/:id' component={Todo} />
            <Route name='update' exact path='/update/:id' component={UpdateTodo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
