import React, { Component } from 'react';
import Counter from "./counter"
import 'bootstrap/dist/css/bootstrap.css'

class Counters extends Component{
    state = {
        counters :[
            {sl: 1, id:1, value: 0, tags : []},
            {sl: 2, id:2, value: 0, tags : []},
        ]
    };
    render(){
        return(
            <div> 
                <button onClick={this.handleAddItem} className='btn m-2 btn-sm btn-manual'>Add +</button>
                <button onClick={this.handleResetAllItem} className='btn m-2 btn-sm btn-secondary'>Reset All</button>
                <button onClick={this.handleDeleteAllItem} className='btn m-2 btn-sm btn-danger'>Delete All</button>
                
                {this.state.counters.map(mp => 
                (<Counter 
                key={mp.id} 
                counter = {mp}
                onDelete = {this.handleDeleteItem}
                onIncrement = {this.handleIncrementValue}
                onReset = {this.handleResetValue}
                />))}
            </div>
        );
    }

    /// FOR PARENT
    handleDeleteItem = (counter) => {
        let data = this.state.counters.filter(fl => fl.id !== counter.id);
        this.setState({counters: data});
    }
    handleAddItem = () => {

        let data = this.state.counters;
        data.push({sl: 0,id:this.state.counters.length+1, value: 0, tags : []});
        this.setState({counters: data});
    }
    handleResetAllItem = () => {
        let data = this.state.counters.map(mp => {mp.value = 0, mp.tags = []; return mp;});
        this.setState({counters: data});
    }
    handleDeleteAllItem = () => {
        this.setState({counters: []});
    }
    
    
    //FOR CHILDS
    handleIncrementValue = (counter) => {
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index].value++;
        counters[index].tags.push(counters[index].value);
        
        this.setState({counters});
    }
    handleResetValue = (counter) => {
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index].value = 0;
        counters[index].tags = [];
        this.setState({counters});
    }
    
    
}

export default Counters;