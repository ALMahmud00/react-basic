import React, { Component } from "react";


class Counter extends Component {
    state = {
        count: 0,
        tags : ["tag1", "tag2", "tag3"]
    };

    render() {
        return(
        <div className="counter-back">
            <span className={this.getBadgeStyle()} >{this.formatCounter()}</span>
            <button onClick={this.handleIncrementValue} className="btn btn-secondary btn-sm m-2">  Increment  </button>
            <button onClick={this.handleResetValue} className="btn btn-danger btn-sm m-2">  Reset  </button>
            
            {this.renderTags()}
        </div>
        );
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>there is no element</p>
        
        return <ul>{this.state.tags.map(tg=><li key={tg}>{tg}</li>)}</ul>
    }


    getBadgeStyle(){
        return this.state.count === 0 ? "badge badge-danger m-5" : 
                this.state.count % 2 == 0 ? "badge badge-primary m-5" :  "badge badge-warning m-5"
    }

    handleIncrementValue = () => {
        this.setState({count: this.state.count + 1 });
    }
    handleResetValue = () => {
        this.setState({count: 0 });
    }

    formatCounter(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;