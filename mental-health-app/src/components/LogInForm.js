import React from "react";
//import {ReactComponent as Logo} from "insert svg file here"

class LogInForm extends React.Component {
  state = {
    email: '',
    password: ''
  }
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]:value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        {/* <div>
        <Logo/>
        </div> */}
        <div>
          <div>
            <h2 className='title'>Log In</h2>
          </div>
          <form className="form-wrapper" onSubmit = {this.handleSubmit}>
            <div className='email'>
              <label className='label'>Email</label>
              <input 
              className='input'
              type="email" 
              name="email" 
              placeholder="example@gmail.com" 
              required onChange={this.handleChange}/>
            </div>

            <div className='password'>
              <label className='label'>Password</label>
              <input 
              className='input'
              type="password" 
              name="password" 
              placeholder="password..." 
              required onChange={this.handleChange}/>
            </div>
            
            <div>
              <button className='submit' onSubmit={this.handleChangeLog}>Log In!</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LogInForm
