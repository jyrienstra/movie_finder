import React from  'react'; //Create and manage components

//Create class
class SearchBar extends React.Component {
    constructor(props){
        super(props);

        //create new state object
        this.state = {
            term: ''
        };

        //binds this object to onInputChange
        this.onInputChange = this.onInputChange.bind(this);
    }

    //Every class needs to implement render()
    //Every state change causes a rerender, so calls render() again
    //By settings value hard text can't be added without a change of state
    //Ex. by deleting onchange editing of input is impossible
    render(){
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        );
    }

    onInputChange(event){
       this.setState({term: event.target.value});
    }
}


//Any file that imports SearchBar can acces the created by this name
export default SearchBar;