import React, {Component} from 'react';
class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(val){
        this.setState({ userInput: val});
    }
    assignEvenAndOdds(userInput) {
        let arr = userInput.split(",");
        let evens= [];
        let odds= [];
console.log(arr)
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i])
            if(arr[i] % 2 === 0){
                evens.push(+arr[i])
                
            }else {
                odds.push(+arr[i])
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    }
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>split</button>
                <span className="resultBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                 <span className="resultBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
                
            </div>
        )
    }

}
export default EvenAndOdd;