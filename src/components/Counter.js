import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';

class Counter extends Component {
    incrementAsync = () => {
        setTimeout(() => {
            this.props.incrementAsync();
        }, 1000)
    };

    render() {

        return (
            <p>
                Clicked: {this.props.counter.count} times
                <button onClick={this.props.increment}>
                    +
                </button>
                <button onClick={this.props.decrement}>
                    -
                </button>
                <button onClick={this.props.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button> 
            </p>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    console.log(state);
    return {
        counter: state.counter
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement, incrementIfOdd, incrementAsync })(Counter);
