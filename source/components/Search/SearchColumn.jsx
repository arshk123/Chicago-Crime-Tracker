/*
  This Component maintains the search column to the left of the Search Home Page
  Will have a searchBar Component to the top of the column, followed by an empty scrollable list view
*/

import React, { Component } from 'react'
import { Button, List, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './Search.scss'

// Components
import MovieCell from './DataCell/Cell.jsx'

// API
// import {search} from '../api/api.jsx'
import axios from 'axios';

class SearchColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList : [],
      movieSelected : -1,
      searchQuery : "",
      descending : false
    }
    this.search = this.search.bind(this);
    this.populateDetailView = this.populateDetailView.bind(this);
    this.createListElement = this.createListElement.bind(this);
    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }
  insert() {

  }

  remove() {

  }

  update() {

  }


  populateDetailView() {

  }

  createListElement(data) {


  }

  search(event) {
    var q = JSON.stringify(event.target.value)
    axios.get("http://localhost:8280/api/crimes/" + q)
    .then(function (response) {
      console.log(response)
      // this.setState({
      //
      // })
    }.bind(this))
    .catch(function (error) {
    });
  }


  render() {

    return(
      <div id="SearchColumn">
        <h1> Search </h1>
        <List horizontal link inverted>
          <List.Item as="a" onClick={() => this.insert()}>
            Insert
          </List.Item>
          <List.Item as="a" onClick={() => this.remove()}>
            Remove
          </List.Item>
          <List.Item as="a" onClick={() => this.update()}>
            Update
          </List.Item>
        </List>
        <h2></h2>
        <Input focus onChange={this.search}  placeholder='Search'/>
        <List selection divided inverted relaxed id="movieList">
        </List>
      </div>
    )
  }
}

export default SearchColumn
