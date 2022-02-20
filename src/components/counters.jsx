import React, { Component } from 'react';
import Counter from "./counter"
import 'bootstrap/dist/css/bootstrap.css'

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
                <button onClick={this.handleAddItem} className='btn m-2 btn-sm btn-manual'>Add +</button>

                {this.state.counters.map(mp => 
                ( <Counter key={mp.id} counter = {mp} onDelete = {this.handleDeleteItem}>
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

    handleAddItem = () => {

        let data = this.state.counters;
        data.push({id:this.state.counters.length+1, value: 0});
        this.setState({counters: data});
    }

    
    
}

export default Counters;