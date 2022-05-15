import React from "react";
//function components
export function Welcome(props){
    return(
        <div>
            <h2>Hello {props.name} welcome to function Component.</h2>
            <hr />
        </div>
    );
}

//class components

export class Message extends React.Component{
    render(){
        return(
            <div>
                <h2>Welcome {this.props.name} in class components</h2>
                <hr />
            </div>
        );
    }
}

export default Message;