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
            {!props.jokes && <h2>Ready For a Laugh?</h2>}
            <button onClick={handleClick}>Get Jokes</button>
            {props.error && <p>{props.error}</p>}
            {props.jokes && <div className='jokesBox'>
                {props.jokes.map(joke => {
                    return <div key={joke.id} className='jokeBox'>
                        <h3>{joke.setup}</h3>
                        <h4 id={`punchline${joke.id}`}>{joke.punchline}</h4>
                    </div>
                })
                }
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