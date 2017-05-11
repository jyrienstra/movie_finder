import React from 'react';
import Request from 'superagent'; //Needed for JSON loading


class MovieDetails extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movieDetails: null
        };

        // this.getMovieDetails('tt0454349');
    }

    render(){
        if(!this.props.movie){
            return <div>loading</div>;
        }

        //If its a new movie
        if(this.state.movieDetails != null) {
            if (this.state.movieDetails.imdbID != this.props.movie.imdbID) {
                this.getMovieDetails(this.props.movie.imdbID); //update movieDetails in state
            }
        }else{
            this.getMovieDetails(this.props.movie.imdbID); //update movieDetails in state
        }

        console.log(this.state.movieDetails);

        return (

            <div className="list-group-item marginTop">
                <div className="video-list media">
                    <img src={this.state.movieDetails.Poster} height="200px" width="200px"/>
                    <h1>{this.state.movieDetails.Title}</h1>
                </div>
                <div id="title">Actors: {this.state.movieDetails.Actors}</div>
                <div id="awards">Awards: {this.state.movieDetails.Awards}</div>
                <div id="directors">Directors: {this.state.movieDetails.Director}</div>
                <div id="runtime">Runtime: {this.state.movieDetails.Runtime}</div>
                <div id="year">Year: {this.state.movieDetails.Year}</div>
                <div id="imdbRating">IMDB Rating: {this.state.movieDetails.imdbRating}</div>



            </div>
        );
    }

    /**
     * @param imdbID
     * @return Movie details
     */
    getMovieDetails(imdbID) {
        var url = "http://www.omdbapi.com?i=" + imdbID;
        //Use superagent library to get json
        Request.get(url).then( (response) => {
            this.setState({ movieDetails: response.body });
        });
    }
}

export default MovieDetails;