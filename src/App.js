import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { authService } from './Services/AuthService';
import Home from './components/Home';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';
import UpdateTodo from './components/UpdateTodo';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/register' render={()=> authService.isLoggedIn() ? <Redirect to="/home" />: <Register/>} />
            <Route exact path='/login' render={()=> authService.isLoggedIn() ? <Redirect to="/home" />: <Login/>}/>
            <Route path='/home' render={()=> authService.isLoggedIn() ? <Home/> : <Redirect to="/login" />}/>
            <Route exact path='/create' component={CreateTodo}/>
            <Route exact path='/:id' component={Todo} />
            <Route name='update' exact path='/update/:id' component={UpdateTodo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


// function PrivateRoute ({component: Component, authed}) {
//   return (
//     <Route
//       render={(props) => authed === true
//         ? <Component />
//         : <Redirect to={{pathname: '/login'}} />}
//     />
//   )
// }

export default App;
