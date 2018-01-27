import React, {Component} from 'react';



class EvenAndOdd extends Component {
    constructor(){
        super();
           this.state = {
               evenArray: [],
               oddArray: [],
               userInput: '',
           }
       }

    solveToy(){
        let newArray;
        
        if(this.state.userInput.includes(',')){
            newArray = this.state.userInput.split(',');
        }else if(this.state.userInput.includes(' ')){
            newArray = this.state.userInput.split(' ');
        }
        let even_Array = newArray.filter(v => v % 2 === 0);
        let odd_Array = newArray.filter(v => v % 2 === 1);
        this.setState({
            evenArray: even_Array.join(", "),
            oddArray: odd_Array.join(", ")
        })
    }

    render(){
       return(

        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>

            <input className="inputLine" onChange={e => this.setState({userInput: e.target.value})}></input>

            <button className="confirmationButton" onClick={() => this.solveToy()}>Get Result</button>

            <span className="resultsBox">Evens[{this.state.evenArray}]</span>

            <span className="resultsBox">Odds[{this.state.oddArray}]</span>

        </div>
       )}
}

export default EvenAndOdd