import React from 'react';
import MovieListItem from './movie_list_item';

const MovieList = (props) => {
    const movies = props.movies.map((movies) => {
        return <MovieListItem
            onMovieClick={props.onMovieClick}
            key={movies.imdbID}
            movie={movies} />
    });

    return <div className="paddingTop">{movies}</div>
}

export default MovieList;