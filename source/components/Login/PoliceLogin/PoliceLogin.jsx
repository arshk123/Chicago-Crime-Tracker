import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class PoliceLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : "",
      password : "",
      valid_login : false
    }

    this.loginPolice = this.loginPolice.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

// https://stackoverflow.com/questions/45598854/passing-props-through-react-router-v4-link
  loginPolice() {
    axios.put("http://fa17-cs411-10.cs.illinois.edu:8280/api/login/" + q,
    {
      "username" : this.state.username,
      "password" : this.state.password
    })
    .then(function (response) {
      console.log(JSON.stringify(response))
      this.setState({fbi_code : response.code})
    }.bind(this))
    .catch(function (error) {
      console.log(error)
    });
  }

  handleUserNameChange(event) {
    console.log(event.target.value)
    this.setState({username : event.target.value});
  }

  handlePasswordChange(event) {
    console.log(event.target.value)
    this.setState({password : event.target.value});
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder='First Name' onChange={this.handleUserNameChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Last Name' onChange={this.handlePasswordChange}/>
          </Form.Field>
          <Button onClick={this.loginPolice} type='submit'> Submit</Button>
        </Form>
      </div>
    )
  }
}

export default PoliceLogin;
