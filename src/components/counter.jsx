import React, { Component } from "react";


class Counter extends Component {
    state = {
        count: this.props.counter.value,
        tags : []
    };

    render() {
        console.log("Prop", this.props);
        return(
        <div>
            {this.props.children}
            <span className={this.getBadgeStyle()} >{this.formatCounter()}</span>
            <button onClick={()=> this.handleIncrementValue({id:199})} className="btn btn-warning btn-sm m-2">  Increment  </button>
            <button onClick={this.handleResetValue} className="btn btn-secondary btn-sm m-2">  Reset  </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">  Delete  </button>
            {this.renderTags()}
        </div>
        );
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>there is no element</p>
        
        return <ul >{this.state.tags.map(tg=><li key={tg}>{tg}</li>)}</ul>
    }


    getBadgeStyle(){
        return this.state.count === 0 ? "badge badge-danger m-3" :  "badge badge-warning m-3"
    }

    handleIncrementValue = (value) => {
        console.log(value.id);
        let tagState = this.state.tags;
        tagState.push(this.state.count+1);

        this.setState({
                count: this.state.count + 1,
                tags: tagState
        });
    }
    handleResetValue = () => {
        this.setState(
            {
                count: 0 ,
                tags: [] 
            });
    }

    formatCounter(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;