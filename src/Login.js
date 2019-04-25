import React, { Component } from 'react'
import { authService } from './Services/AuthService';

    class Login extends Component {
      constructor (props) {
        super(props)
        this.state = {
          email: '',
          password: ''
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleLoginUser = this.handleLoginUser.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleLoginUser (event) {
        event.preventDefault()

        const { history } = this.props

        const user = {
          email: this.state.email,
          password: this.state.password
        }
        authService.login(user).then(res => history.push('Home')).catch(res=>this.setState({loginError:true}));

      }

      hasErrorFor (field) {
        return false;
      }

      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }

      render () {
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Login</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleLoginUser}>
                      <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                          id='email'
                          type='text'
                          className={`form-control ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
                          name='email'
                          value={this.state.email}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('email')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                          id='password'
                          type='password'
                          className={`form-control ${this.hasErrorFor('password') ? 'is-invalid' : ''}`}
                          name='password'
                          value={this.state.password}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('password')}
                      </div>
                      <button className='btn btn-primary'>Login</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    export default Login;