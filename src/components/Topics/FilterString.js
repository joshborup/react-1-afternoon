import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['josh', 'annie', 'jeff', 'jake', 'lora', 'alexa', 'bird'],
            userInput: '',
            filterArray: []
        }
    }

    solveToy(prop){
        var newArray = []
        var arrayOfStrings = this.state.unFilteredArray;
        for(let i =0; i < arrayOfStrings.length; i++){
            if(arrayOfStrings[i].match(prop)){
                newArray.push(prop)
            }
        }
        this.setState({
            filterArray: newArray
        })
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={(e) => this.setState({userInput: e.target.value})}/>
                <button className='confirmationButton' onClick={this.solveToy(this.state.userInput)}></button>
                <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filterArray)}</span>
            </div>
        )
    }
}

export default FilterString