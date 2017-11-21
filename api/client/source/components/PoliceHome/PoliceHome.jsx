import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchColumn from '../Search/SearchColumn.jsx'

import styles from './PoliceHome.scss'

class PoliceHome extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div className="Home">
      <div id="header">
        <h1> Chicago Crime Finder </h1>
      </div>
      <SearchColumn />
    </div>
  )
  }
}

export default PoliceHome;
