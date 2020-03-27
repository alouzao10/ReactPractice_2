import React, { Component } from 'react';

import axios from 'axios';

import { Consumer } from '../../Context';

class Search extends Component {
  state = {
    trackTitle: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = e => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        //this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch(err => {
        console.log('Error: ' + err);
      });
  };

  render() {
    return (
      <Consumer>
        {value => {
          // bring in the global state of the tracks
          return (
            <div className='card card-body mb-4 p-4'>
              <h1 className='display-4 text-center'>
                <i className='fas fa-music'></i> Search For A Song
              </h1>
              <p className='lead text-center'>Get the lyrics for any song...</p>
              <form onSubmit={this.findTrack}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Song Title/Lyric...'
                    name='trackTitle'
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  ></input>
                  <button
                    className='btn btn-primary btn-lg btn-block mb-5'
                    type='submit'
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
