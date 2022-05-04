import React from 'react'
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
          <form onSubmit = {this.handleSubmit}>
            <input type="email" name="email" placeholder="example@gmail.com" required onChange={this.handleChange}/>
            <input type="password" name="password" placeholder="password..." required onChange={this.handleChange}/>
            <button onSubmit={this.handleChangeLog}>Log In!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LogInForm