import React, { Component } from 'react';
import Movie from './Movie_helper';
import './Movie.css';
const movies = require('../movies.json');


export class Movies extends Component {
  enlarge(image, title, director, rating, plot) {
    document.body.style.overflow = 'hidden';


    var box = document.createElement('div');
    box.id = 'box';
    box.className = 'box_setting';

    var box_wrap = document.createElement('img');
    box_wrap.src = image;
    box_wrap.id = 'box_wrap'; 


    var box_info = document.createElement('div'); 
    box_info.innerHTML = '<span class=\'title\'>'+title+'</span><br/><span class=\'director\'> Directed by:  '+director+'</span><br/> <p>'+plot+'</p>  <br/><br/>   <span class=\'rating\'>   &nbsp;&nbsp; &nbsp; IMDB Score: '+rating+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <br/><br/>';
    box_info.id = 'box_info';
    
    var box_appearance = document.createElement('div');
    box_appearance.id = 'box_appearance';
    box_appearance.className = 'appearance';

///////////////////////////

    document.body.appendChild(box);  
    document.getElementById('box').appendChild(box_appearance);
    document.getElementById('box_appearance').appendChild(box_wrap);
    document.getElementById('box_appearance').appendChild(box_info);

    document.getElementById('box').addEventListener('click', function(event) {
      if(event.target.className === 'box_setting') {
        document.getElementById('box').removeChild(document.getElementById('box_appearance'));
        document.body.removeChild(document.getElementById('box'));
        document.body.style.overflow = 'auto';
      }
    });
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  fetch() {
    let movieList = [];
    for (let movie of movies) {
      movieList.push(movie.id);
    }
    return movieList;
  }
  
  render() {
    let movieList = this.fetch();
    return movieList.map((movie) =>(
        <div className='content'>     
            <Movie movie={movie} enlarge={this.enlarge} />
        </div> 
    ));
  }
}
export default Movies;