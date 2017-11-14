import React, {Component} from 'react'
import { Button, List, Input } from 'semantic-ui-react'
import {browserHistory} from 'react-router';
import axios from 'axios';
class NavButton extends Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.state = {
      query : ""
    }
  }

  search(event) {
    // point to props
    console.log("redirecting")
    this.setState({
      query : JSON.stringify(event.target.value)
    })
    // TODO set up search query to connect to webserver and display data
  }

  render() {
    return (
      <div className="Search">
        <Input focus onChange={this.search}  placeholder='Search'/>
      </div>
      )
  }

}
export default NavButton
