import React from 'react';

const scaleName = {
    c : "Celsius",
    f : "Fahrenheit"
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function WillBoil(props){
    if(props.temperature >= 100){
        return <p>Water Will Boil.</p>;
    }else{
        return <p>Water Will Not Boil.</p>;
    }
}

class TemperatureInput extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>Enter temperator in {scaleName[this.props.scale]} : </label>
                        <input type="number" value={this.props.temperature} onChange={(e)=>{this.props.handleChange(this.props.scale, e)}} name="temperature"/>
                    </div>

                    <WillBoil temperature={this.props.temperature} />

                </form>
            </div>
        );
    }
}

export class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scale: "c",
            temperature : ""
        };
    }

    handleChange = (scale, e) =>{
        this.setState({scale: scale, temperature : e.target.value});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;

        const fahrenheit  = scale === "f" ? temperature :  tryConvert(temperature, toFahrenheit);
        const celsius = scale === "c" ? temperature : tryConvert(temperature, toCelsius);

        return <>
            <h1>Lifting Up State</h1>
            <TemperatureInput scale="c" temperature={celsius} handleChange={this.handleChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} handleChange={this.handleChange} />
            <hr />
        </>
    }
}
