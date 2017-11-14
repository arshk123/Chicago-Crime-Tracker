import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import {browserHistory} from 'react-router';

class NavButton extends Component {
  constructor(props) {
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    // point to props
    console.log("redirecting")
    // let history = createBrowserHistory()
    console.log(this.props.route)
    browserHistory.push({
      pathname : this.props.route
    })
  }

  render() {
    return (
      <Button onClick={ this.redirect }>
        {this.props.text}
      </Button>
      )
  }

}
export default NavButton
