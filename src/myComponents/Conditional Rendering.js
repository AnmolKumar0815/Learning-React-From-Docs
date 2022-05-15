import React from 'react';

function WelcomeUser(){
    return <>
        <h2>Hello User Welcome Back!!</h2>
        <hr></hr>
    </>
}

function WelcomeStranger(){
    return <>
        <h2>Hello Stranger Welcome Please Create Your Account</h2>
        <hr></hr>
    </>
}

export function Greeting(props){
    //with if-else

    // if(props.isLoggedIn){
    //     return <WelcomeUser />
    // }else{
    //     return <WelcomeStranger />
    // }

    // with ternary operator
    return props.isLoggedIn === true ? <WelcomeUser /> : <WelcomeStranger />;
}

export function GreetingWithNewTechnique(props){
    return(
        <div>
            <h2>Hello User</h2>
            {props.isLoggedIn === true &&
                <p>Your are our regular user we care for you</p>
            }
            <hr></hr>
        </div>
    );
}
