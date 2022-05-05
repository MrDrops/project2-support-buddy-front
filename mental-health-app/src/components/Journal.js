import React, { Component } from "react";

class Journal extends Component {
    constructor() {
        super();
        this.state = {
        textAreaValue: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
    }
   


    render() {
        return (
        <div className="journal-text">
            <h2>Congratulations!</h2><br></br>
            <p>Leave your feelings and thoughts here,<br></br> and you can review these later.  </p><br></br>
            <textarea className="journal-text-box"
            value={this.state.textAreaValue}
            onChange={this.handleChange}
            />
            
            <div className="journal-btn"><input className="text-btn" type="submit" value="submit" /></div>
            
        </div>
        );
    }
}

export default Journal;