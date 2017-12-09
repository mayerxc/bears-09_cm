import React, { Component } from 'react';

class ResultsBox extends Component {
    constructor() {
        super();
        this.state = {
            podcasts: ["test"] 
        }
    }
    
    render() {
        // const Message = props => <div>{props.children}</div>;
        return (
            // <Message>Hello World</Message>
            <div>{this.state.podcasts}</div>
        )
    }
}

export default ResultsBox