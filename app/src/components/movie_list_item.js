import React from 'react';

const MovieListItem = (props) => {
    //same as props.movies
    //or props.onVideoClick
    return (
        //When div is clicked pass the current  to the funtion onMovieClick
        <div onClick={ ()=>  props.onMovieClick(props.movie) } className="col-md-6 list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={props.movie.Poster} height="150px" width="150px"/><br/>
                </div>
                <div className="media-body">
                    Title = {props.movie.Title}<br/>
                    Type = {props.movie.Type}<br/>
                    Year = {props.movie.Year}<br/>
                    imdbID = {props.movie.imdbID}<br/>
                </div>
            </div>
        </div>
    );
}

export default MovieListItem;

