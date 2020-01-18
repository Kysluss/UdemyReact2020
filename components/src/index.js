// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = { text: 'Click me' };
    const style = { backgroundColor: 'blue', color: 'white'};

    return <div>Hi there</div>;
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));