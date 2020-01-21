// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author="Sam" timeAgo="Today at 6:00PM" content="Nice blog post!" avatar={faker.image.avatar()} />
            <CommentDetail author="Alex" timeAgo="Today at 2:00PM" content="I like the subject" avatar={faker.image.avatar()} />
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" content="I like the writing" avatar={faker.image.avatar()} />
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));