function Clock(){
    return(
        <div>
            <h2> Updating rendered element </h2>
            <p>Time is {new Date().toLocaleTimeString()}</p>
            <hr />
        </div>
    );
}

export default Clock;