import React from 'react';
export default class arrow extends React.Component{
render(){

    var t=9;
    let count=0;
    const AddONe=()=>
    {

       count=count+1;
    console.log(count);
    }
    const MinusONe=()=>
    {

       count=count-1;
    console.log(count);
    }
    

return(
    <div>

     <h1>Count : </h1>
        <h2>{count}</h2>
    <button onClick={AddONe}>Add One</button>
    <button onClick={MinusONe}>Minus One</button>
    </div>
);
}}