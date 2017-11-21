/*
  represents a single instance of a search result
*/
import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './Cell.scss'
import PropTypes from 'prop-types';

var base_url = 'https://image.tmdb.org/t/p/w500';


/*
  Each Movie Cell refers to a listitem in the list view
  Takes in  props {
    header: title
    subheader: rank
    backdrop: link in api for movie image
  }
*/
class MovieCell extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.backdrop) {
      return(
        <List.Item onClick={() => this.props.selectionTrigger(this.props.id)}>
          <Image avatar src={base_url + this.props.backdrop} />
          <List.Content>
            <List.Header>{this.props.header}</List.Header>
            {this.props.subheader}
          </List.Content>
        </List.Item>
      )
    }
    else {
      return(
        <List.Item onClick={() => this.props.selectionTrigger(this.props.id)}>
          <List.Content>
            <List.Header>{this.props.header}</List.Header>
            {this.props.subheader}
          </List.Content>
        </List.Item>
      )
    }
  }
}

MovieCell.propTypes = {
  name : PropTypes.string,
  header : PropTypes.string,
  backdrop : PropTypes.string,
  id : PropTypes.number,
  selectionTrigger : PropTypes.func
}

export default MovieCell
