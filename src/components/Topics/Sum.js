import React, { Component } from 'react';

class Sum extends Component{

    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    sumSolver(num1, num2){
       var answer = Number(num1) + Number(num2);
       this.setState({
           sum: answer
       })
    }


    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Value of "Sum"</h4>
                <input className="inputLine" onChange={(e) => this.setState({number1: e.target.value})}/>
                <input className="inputLine" onChange={(e) => this.setState({number2: e.target.value})} />
                <button className="confirmationButton" onClick={() => this.sumSolver(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum