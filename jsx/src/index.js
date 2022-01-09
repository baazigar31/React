//import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom'

//create react component
const App=()=>{
    const buttonText={text:"click on me!"};

    return <div>
    <label className="label" htmlFor="name">Your Name:</label>
    <input id="name" type="text"/>
<button style={{backgroundColor:'lightblue'}}>{buttonText.text}</button>
    </div>
}

//Take the react component and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)