import React, { Component } from "react";


class Counter extends Component {

    render() {
        return(
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">#{this.props.counter.id}</h4>
                
                <span className={this.getBadgeStyle(this.props.counter)} >{this.formatCounter(this.props.counter)}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-warning btn-sm m-2">  Increment  </button>
                <button onClick={()=> this.props.onReset(this.props.counter)} className="btn btn-secondary btn-sm m-2">  Reset  </button>
                <button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger btn-sm m-2">  Delete  </button>
                
                <br/> {this.renderTags(this.props.counter)}
            </div>
        </div>
        );
    }
    renderTags(counter){
       if(counter.tags.length === 0) return "there is no element"
       return <ul >{counter.tags.map(tg=><li key={tg}>{tg}</li>)}</ul>
    }
    getBadgeStyle(counter){
        return counter.value === 0 ? "badge badge-secondary m-3" :  "badge badge-warning m-3";
    }
    formatCounter(counter){
        return counter.value === 0 ? 'Zero' : counter.value;
    }
}

export default Counter;