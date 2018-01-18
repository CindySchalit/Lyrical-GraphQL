import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo' // will help us bond component with query - Apollo Provider bonds graphql server with React side of application - join query and component
import { Link } from 'react-router'

import fetchSongs from '../queries/fetchSongs'

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          { song.title }
        </li>
      )
    })
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div>
          Loading
        </div>
      )
    }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(fetchSongs)(SongList)
  // graphql library creates data object on this.props
