/*
  Will render song details in right side of page.
*/
import React, { Component } from 'react'
import { List, Image, Modal, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

/*
  Each detailView refers to a listitem in the list view
  Takes in  props {
    header: title
    subheader: rank
    backdrop: link in api for movie image
  }
*/
class CrimeDetailView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: true,
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.propogate = this.propogate.bind(this)
  }

  handleOpen() {
    this.setState({ modalOpen: true })
  }

  handleClose() {
    this.setState({ modalOpen: false }, ()=>this.props.clearCrimeSelection())
    // this.props.imageLink = ""

  }

  render() {
    console.log(JSON.stringify(this.props))
    var img = ""
    if(this.props.imageLink === "https://image.tmdb.org/t/p/w500/") {
      img = <p>No image to show</p>
    }
    else {
      img = <Image centered src={this.props.imageLink}/>
    }
    // https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
    if(this.props.mSelected) {
      return(
        <Modal open={this.state.modalOpen} closeOnDocumentClick onClose={this.handleClose}>
          <Header content={this.props.title} />
          <Modal.Content>
            <div id="detailView">
              {img}
              <h4> {"Rank: " + this.props.rank} </h4>
              <h4> {"Number of Reviews: " + this.props.numVotes} </h4>
              <h4> {"Genres: " + this.props.genre} </h4>
              <h4> Description </h4>
              <p> {this.props.description} </p>
            </div>
          </Modal.Content>
        </Modal>
      )
    }
    else {
      return(
        <div id="detailView"></div>
      )
    }
  }
}
// https://reactjs.org/docs/typechecking-with-proptypes.html
CrimeDetailView.propTypes = {
  imageLink : PropTypes.string,
  title : PropTypes.string,
  numVotes : PropTypes.node,
  description : PropTypes.string,
  genre : PropTypes.string,
  mSelected : PropTypes.bool,
  clearMovieSelection : PropTypes.func
}


export default CrimeDetailView
