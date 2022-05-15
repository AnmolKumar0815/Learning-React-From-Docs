import React from 'react';
import './universalCss.css';

export class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }

        this.decrement = this.decrement.bind(this);
    }

    componentDidMount(){
        // console.log("componentDidMount");
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount");
    }

    componentDidUpdate(){
        // console.log("componentDidUpdate");
    }

    increment = ()=>{
        this.setState({count : this.state.count + 1});
        // console.log("increment");
    }

    decrement(){
        this.setState({count : this.state.count - 1});
        // console.log("decrement");
    }

   render(){
       return(
           <div>
               <h2>Here is the example of React State</h2>
               <div>
                   <p>Counter = {this.state.count}</p>
               </div>

               <div>
                    <button className='btn' onClick={this.increment}>+</button>
                    <button className='btn' onClick={this.decrement}>-</button>

                    {/* <button className='btn' onClick={this.decrement.bind(this)}>-</button> */}
               </div>
               <hr />
           </div>
       );
   }
}

export default LifeCycle;