import React, {Component} from 'react';
class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }

    isPalindrom(userInput){
        let forWards = userInput
        let backWards = userInput;
        backWards = backWards.split('')
        backWards = backWards.reverse()
        backWards = backWards.join('')


        if(forWards === backWards){
            this.setState({palindrom: 'true'})
        }else{
            this.setState({palindrome: 'false'})
        }
    }

    render(){
        return(
            <div>
                <h4>Palindrom</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.isPalindrom(this.state.userInput)}> Check </button>
                <span className='resultsBox'>Palindrom: { this.state.palindrome}</span>
            </div>
        )
    }
}
export default Palindrome;