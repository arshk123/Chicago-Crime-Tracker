import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './Home.scss'

import NavButton from '../NavButton/NavButton.jsx'

class Home extends Component {
    constructor(props) {
      super(props)

    }

    render() {
        return (
        <div className="Home">
            <div className="CenteredText">
              <h1>Chicago Crime Tracker</h1>
            </div>
            <div className="Options">
              <Link to='policelogin'> Police </Link>
            </div>
          </div>
        )
    }
}

export default Home
