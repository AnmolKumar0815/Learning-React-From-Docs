import React from 'react';
import './universalCss.css';

export class Toogle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggled : true
        };
    }

    // way 1
    // changeState = (msg)=>{
    //     console.log(msg);
    //     this.setState(
    //         {isToggled : !this.state.isToggled}
    //     );
    // }

    //way 2 and 3
    changeState(msg){
        console.log(msg)
        this.setState(
            {isToggled : !this.state.isToggled}
        );
    }



    render(){
        return(
            <div>
                <h2>This is Example of Handling Events.</h2>
                {/* way 1 */}
                {/* <button className='btn' onClick={this.changeState}>{this.state.isToggled ? "ON" : "OFF"}</button> */}
                {/* way 2 */}
                <button className='btn' onClick={()=>{this.changeState("hello")}}>{this.state.isToggled ? "ON" : "OFF"}</button>
                {/* way 3 */}
                {/* <button className='btn' onClick={this.changeState.bind(this, "hello")}>{this.state.isToggled ? "ON" : "OFF"}</button> */}
                <hr />
            </div>
        );
    }
}
