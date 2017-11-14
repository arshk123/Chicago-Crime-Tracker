import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class PoliceLogin extends Component {
  constructor(props) {
    super(props)
    console.log("PoliceLogin")
  }

  render() {
    return(
      <Link to="/policehome"> Login </Link>
    )
  }

}
export default PoliceLogin
