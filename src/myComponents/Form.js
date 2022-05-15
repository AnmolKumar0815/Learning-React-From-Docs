import React from 'react';

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            intro : "",
            country : "India"
        };

        //make a copy of initial state so that when user submit the form you can set all fields as initail.
        this.initialState = {...this.state};
    }

    handleChange = (e)=>{
        const nameAttr = e.currentTarget.name;
        //way 1
        // let obj = {};   //create an empty object
        // obj[nameAttr] = e.currentTarget.value;   //save value on a specified key
        // this.setState(obj); //update state

        //way 2 
        this.setState({[nameAttr] : e.currentTarget.value}); //same thing but 1 line syntax
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        alert("Name = " + this.state.name + ", Introduction = " + this.state.intro + ", Country = " + this.state.country);

        //clear state and form fields
        this.setState(this.initialState);  
    }

    render(){
        return(
            <div>
                <h2>Form In React.</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Name: </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Your Name" />
                    </div>
                    <div>
                        <label htmlFor="">Introduction</label>
                        <textarea cols="30" rows="10" name="intro" value={this.state.intro} onChange={this.handleChange} placeholder='Tell Us About YourSelf'></textarea>
                    </div>
                    <div>
                        <label>Your Are From</label>
                        <select value={this.state.country} name="country" onChange={this.handleChange}>
                            <option value="America">America</option>
                            <option value="Japan">Japan</option>
                            <option value="India">India</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>

                </form>
                <hr></hr>
            </div>
        );
    }
}