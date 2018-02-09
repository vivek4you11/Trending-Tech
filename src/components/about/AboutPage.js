import React from 'react';

class AboutPage extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            count : 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This is our Young Team trying to do something interesting while learning React and Redux.</p> 
                <hr />
                <p>Count : {this.state.count}</p><br />
                <input type="button" value="ADD" className="btn btn-primary" onClick={this.increment} />{ " " }
                <input type="button" value="SUB" className="btn btn-primary" onClick={this.decrement} />
            </div>
        );
    }
}

export default AboutPage;
