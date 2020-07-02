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
            userinput: '',
            filteredCars: []
        }
        
    }

    handleChange(val){
        this.state({userinput: val});
    }

    filteredCars(prop){
        let cars = this.state.cars;
        let filteredCars = [];

        for ( let i = 0; i < employees.length; i++ ) {
            if ( cars[i].hasOwnProperty(prop) ) {
              filteredCars.push(cars[i]);
            }
        }
        
        this.setState({filteredCars: filteredCars});
    }
    
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>"Filter Object"</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.cars, null , 10)}</span>
                <input className="inputLine" onChange={(element) => this.handleChange(element.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filteredCars(this.state.userinput)}>filter</button>
                <span className="resultBox filterObjectRB">filtered: { JSON.stringify(this.state.filteredCars, null , 10)}</span>

            </div>
        )
    }
}

export default FilterObject;