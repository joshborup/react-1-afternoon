import React, { Component } from 'react';

class FilterObject extends Component{

        constructor(){
            super()
            this.state = {

                userInput:'',
                filteredArray: [],
                unFilteredArray: [{"name": "Josh Borup",
                                    "title": "Student",
                                    "age": 30 },

                                   {"name": "Jeff Borup",
                                    "age": 34,
                                    "hairColor": "Blond" },

                                   {"name": "Annalynne Brown",
                                    "title": "Crime Analyst" }]

            }
        
        }

        solveToy(prop){
        var employees = this.state.unFilteredArray;
        var newArray = [];
        for(let i = 0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(prop)){
                newArray.push(employees[i]);
            }
        }
            this.setState({
                filteredArray: newArray
            })
        }

        render(){
            return(

                <div className="puzzleBox filterObjectPB">
                    <h4>Filter Object</h4>
                    <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                    <input className="inputLine" onChange={(e)=>this.setState({ userInput: e.target.value })}/>
                    <button className="confirmationButton" onClick={()=>this.solveToy(this.state.userInput)}>Filter</button>
                    <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
                </div>
       
        )
    }
}

export default FilterObject