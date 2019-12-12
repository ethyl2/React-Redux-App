import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const JokesList = (props) => {

    const handleClick = e => {
        console.log('in handleClick');
        e.preventDefault();
        props.getData();
    }
    return (
        <div>
            <h2>Ready For a Laugh?</h2>
            <button onClick={handleClick}>Get Jokes</button>
            {props.error && <p>{props.error}</p>}
            {props.jokes && <div>
                {props.jokes.map(joke => <h3 key={joke.id}>{joke.setup} {joke.punchline}</h3>)}
            </div>}
        </div>
    )
};

const mapStateToProps = state => {
    return {
    jokes: state.jokes,
    error: state.error
    }
}

export default connect(mapStateToProps, { getData })(JokesList);