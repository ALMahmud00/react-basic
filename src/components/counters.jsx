import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component{
    state = {
        counters :[
            {id:1, value: 5},
            {id:2, value: 2},
            {id:3, value: 0},
            {id:4, value: 3}
        ]
    };
    render(){
        return(
            <div> 
             {this.state.counters.map(mp => ( 
             <Counter key={mp.id} counter = {mp} onDelete = {this.handleDeleteItem}>
                 <h4>Counter Serial: {mp.id}</h4>
             </Counter>
             ))}
            </div>
        );
    }

    handleDeleteItem = (id) => {
        console.log("clicked", id);
        let data = this.state.counters.filter(fl => fl.id !== id);
        this.setState({counters: data});
    }
}

export default Counters;