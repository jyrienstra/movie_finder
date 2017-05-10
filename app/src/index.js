//Import the React library
import React from  'react'; //Create and manage components
import ReactDOM from 'react-dom'; //Use to create and render our component to the DOM

//Create a new component. This will produce HTML
//const is similair to var, but this is the final value (will not change)
//This const App is a class but not an Instance
// 2 syntax types (identical)
//      Type 1 = function()
//      Type 2  = () =>
const App = () => {
    //Html parts look like HTML, but behind the scenes it's javascript
    //It uses the JSX library, javascript code that produces html (usages of tags in javascript) - makes code a lot cleaner
    //Webpack and Babble translate it to HTML
    return <div>Test!</div>;
}


// Components generated HTML is put in the page (DOM)
// We let React handle this part
// Make an instance of the class App using <App/>
// Arg1 = instance
// Arg2= target node (where the html is rendered, example = container class)
ReactDOM.render(<App></App>, document.querySelector('.container'));

