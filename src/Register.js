import React, { Component } from 'react'
import { authService } from './Services/AuthService';

    class Register extends Component {
      constructor (props) {
        super(props)
        this.state = {
          name: '',
          email: '',
          password: ''
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewUser = this.handleCreateNewUser.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleCreateNewUser (event) {
        event.preventDefault()

        const { history } = this.props

        const user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }

        authService.register(user);

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
                  <div className='card-header'>Register</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewUser}>
                      <div className='form-group'>
                        <label htmlFor='name'>User Name</label>
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                          name='name'
                          value={this.state.name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('name')}
                      </div>
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
                      <button className='btn btn-primary'>Register</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

export default Register;