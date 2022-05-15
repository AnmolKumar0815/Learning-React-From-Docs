import React from 'react';

export function RenderingMultipleElement(){
    let ary = [1,2,3,4,5,6,7,8,9,10];

    let listItem = ary.map((list)=>{
        return <li key={list.toString()}>This is list {list}.</li>
    });

    return(
        <div>
            <h2>Rendering Multiple Elements.</h2>
            <ul>{listItem}</ul>
            <hr></hr>
        </div>
    );
}
