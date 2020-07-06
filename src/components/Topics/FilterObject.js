import React, {Component} from 'react';
class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            cars: [
                {
                    make: 'chevy',
                    modle: 'silverado',
                    year: 2010,
                },
                {
                    make: 'dodge',
                    modle: 'ram',
                    year: 2004,
                },
                {
                    make: 'plymouth',
                    modle: 'superbird',
                    year: 1996,
                }

            ],
            userInput: '',
            filteredCars: []
        }
        
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filteredCars(prop){
        console.log(prop)
        
        let cars = this.state.cars;
        let filteredCars = [];

        for ( let i = 0; i < cars.length; i++ ) {
            console.log(cars[i])
            console.log(cars[i].hasOwnProperty(prop))
            if ( cars[i].hasOwnProperty(prop) ) {
                console.log(cars[i])
              filteredCars.push(cars[i]);
            }
        }
        console.log(filteredCars)
        
        this.setState({filteredCars: filteredCars});
    }
    
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>"Filter Object"</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.cars, null , 10)}</span>
                <input className="inputLine" onChange={(element) => this.handleChange(element.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filteredCars(this.state.userInput)}>filter</button>
                <span className="resultBox filterObjectRB">filtered: { JSON.stringify(this.state.filteredCars, null , 10)}</span>

            </div>
        )
    }
}

export default FilterObject;