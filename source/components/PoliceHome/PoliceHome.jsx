import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchColumn from '../Search/SearchColumn.jsx'
import { Button, Input } from 'semantic-ui-react'

import styles from './PoliceHome.scss'

class PoliceHome extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

  }

  render() {
    return (
    <div className="Home">
      <div className="navbar" id="nav">
        <Button id="popup-button"> POPUPS </Button>
        <Button id="carousel-button"> SLIDES </Button>
        <Button id="video-button"> SHOTS </Button>
        <Button id="multi-column-button"> BEANS </Button>
        <Button id="home-button"> HOME </Button>
      </div>
      <div className="content-container">
        <div className="search">
          <Input fluid focus value="Search Bar goes here" onChange={this.handleChange}/>
        </div>
        <div className="map">
          Map Goes here
        </div>
        <div className="DetailView">
          Detail View
        </div>
      </div>
    </div>
  )
  // <SearchColumn />
  }
}

export default PoliceHome;
