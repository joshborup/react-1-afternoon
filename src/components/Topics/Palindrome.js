import React, { Component } from 'react'

class Palindrome extends Component{

    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    palindromeSolver(val){
        var forwards = val;
        var reversed = val;
        reversed = reversed.split('');
        reversed = reversed.reverse();
        reversed = reversed.join('');
        
        var answer = (reversed === forwards) ? this.setState({ palindrome: JSON.stringify(true)}) : this.setState({ palindrome: JSON.stringify(false)});

        
            
        }
    
    render(){
        return(
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.setState({userInput: e.target.value})} />
                <button className='confirmationButton' onClick={() => this.palindromeSolver(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome