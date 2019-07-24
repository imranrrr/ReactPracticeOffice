import React from 'react';
import {connect} from 'react-redux';

const DrawCArd=props=>{
console.log("draw",props);
return(

    <div>

<p>dd</p>
    </div>
)





}
export default connect(

    state=>({deck_id:state.Deck.Deck_id})
)(DrawCArd);