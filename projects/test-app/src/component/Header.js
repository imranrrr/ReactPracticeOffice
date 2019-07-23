import React from 'react';
import {Link} from 'react-router-dom';
 
const Header=({children})=>{
return (
<div>
    <div className="header">

    <h3><Link to='/'>App</Link></h3>

    <h3><Link to='/count'>Counter</Link></h3>
    <h3><Link to='/Jokes'>Jokes</Link></h3>
    <h3><Link to='/Project'>Project</Link></h3>   
    </div>
 
     {children}
    </div>
)
}
export default Header;