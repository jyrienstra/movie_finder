//Import librars
import React from  'react'; //Create and manage components
import ReactDOM from 'react-dom'; //Use to create and render our component to the DOM
import Request from 'superagent'; //Needed for JSON loading
import _ from 'lodash'; //need this for movie delaying

//Import own created components
import SearchBar from './components/search_bar';
import MovieList from './components/movie_list';
import MovieDetails from './components/movie_details';

//Create a new component. This will produce HTML
//const is similair to var, but this is the final value (will not change)
//This const App is a class but not an Instance
// 2 syntax types (identical)
//      Type 1 = function()
//      Type 2  = dir() =>
class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movies: [],
            selectedMovie: null
        };

        this.search('test');
    }

    //Html parts look like HTML, but behind the scenes it's javascript
    //It uses the JSX library, javascript code that produces html (usages of tags in javascript) - makes code a lot cleaner
    //Webpack and Babble translate it to HTML
    render(){
        //Search every 250 ms using lodash.debounce
        //Prevents lagging in the page when searching
        //use anonymous function so we can call this.search (still in our scope)
        const searchWait = _.debounce( (value) => {
            this.search(value)
        }, 250);

        return (
            //using lodash .debounce function we can delay the search, eg every 250ms
            //we do this to prevent lagging of the pag
            <div>
                <SearchBar onSearchTermChange={value => searchWait(value)}/>
                <MovieDetails movie={this.state.selectedMovie}/>
                <MovieList onMovieClick= {selectedMovie => this.setState({selectedMovie}) } movies={this.state.movies} />
            </div>
        );
    }

    /**
     * @param string
     * @return (multiple) or no movies
     */
    search(string){
        var url = "http://www.omdbapi.com?s=" + string;
        //Use superagent library to get json
        Request.get(url).then( (response) => {
            this.setState({ movies: response.body.Search });
        });
    }
}



// Components generated HTML is put in the page (DOM)
// We let React handle this part
// Make an instance of the class App using <App/>
// Arg1 = instance
// Arg2= target node (where the html is rendered, example = container class)
ReactDOM.render(<App/>, document.querySelector('.container'));

