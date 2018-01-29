import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: ['josh', 'annie', 'jeff', 'jake', 'lora', 'alexa', 'bird'],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }

    solveToy(prop){
        var newArray = []
        var arrayOfStrings = this.state.unFilteredArray;
        for(let i = 0; i < arrayOfStrings.length; i++){
            if(arrayOfStrings[i].includes(prop)){
                newArray.push(arrayOfStrings[i])
            }
        }
        this.setState({
            filteredArray: newArray,

        })
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.solveToy(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString