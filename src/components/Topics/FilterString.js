import React, {Component} from 'react';
class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            drinks: ['redbull', 'vault', 'horchatta', 'squirt'],
            userInput: '',
            filteredDrinks: []
        };
    }

    handleChange(val){
        this.setState({ userInput: val});
    }

    filterdDrinks(userInput){
        let drinks = this.state.drinks;
        let filteredDrinks = [];

        for(let i = 0; i< drinks.length; i++){
            if(drinks[i].includes(userInput)){
                filteredDrinks.push(drinks[i])
            }
        } 
        this.setState({filterdDrinks: filteredDrinks});  
    }  
          
    
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'> Drinks: { JSON.stringify(this.state.drinks, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.state.filteredDrinks(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Drinks: { JSON.stringify(this.state.filterdDrinks, null, 10)}</span>
            </div>
        );
    }
}

export default FilterString