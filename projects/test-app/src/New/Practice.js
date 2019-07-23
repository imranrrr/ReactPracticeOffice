import React, {Component} from 'react';

class Practice extends Component{

render()
{
   var val=this.props.value;
   return(

        <div>
              <h3>{val}</h3>              
        </div>

   );
 


}

}
export default Practice;