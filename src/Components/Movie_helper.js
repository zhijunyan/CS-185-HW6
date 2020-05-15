import React, { Component } from 'react';
import './Movie.css';
const axios = require('axios');

 
export class Movie_helper extends Component {
  constructor()
  {
    super();
    this.state = {src: '',title: '',imdb: '',plot: '',director: ''}
  }

  getMovieInfo(obj, req) {
    axios.get(req)
    .then(function (response) {
      obj.setState({
        src: response.data.Poster,
        title: response.data.Title,
        imdb: response.data.imdbRating,
        plot: response.data.Plot,
        director: response.data.Director,
      });
      console.log(response.data);
    })
  }

  render() {
    let req = 'https://www.omdbapi.com/?apikey=aeddd447&i='+this.props.movie;
    
    return(
      <div className='frame'>
        {this.getMovieInfo(this, req)}
        <img src={this.state.src}  
        onClick={this.props.enlarge.bind(this, this.state.src, this.state.title, this.state.director, this.state.imdb, this.state.plot)} alt={this.state.title}/>
      </div>      
    );
  }
}
export default Movie_helper;
