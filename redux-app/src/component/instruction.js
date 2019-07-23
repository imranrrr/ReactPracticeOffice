import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux';
import {start_game,cancel_game,expandInstruction,cancelInstruction} from '../action/setting';
import App from './App';
class instruction extends React.Component {
  
  render(){
  console.log("this",this);
  return (
    <div>
      <div className="game">
        <App/>
        <hr/>
      <h2>Game Instruction</h2>
      
        {
        this.props.instruction ?

        (
          <div>
            <h2>
              Here Expand Instruction!
              
            </h2>
            <button onClick={this.props.expand}>collapse Instruction</button>
          </div>
        ):
        (
          <div>
            <h2>
              Here Collapse Instruction!  
            </h2>
            <button onClick={this.props.cancelIns}>Expand Instruction</button>
          
          </div>
        )
        }
      </div>



    </div>



  );
}
}
const mapStateToProps=state=>{

console.log('state',state);
return{
  instruction:state.instruction
}

};
const mapDispatchToProps=disptch=>{
   
  return{
  
  expand:()=> disptch(cancelInstruction),
  cancelIns:()=>disptch(expandInstruction)

   };

}
const ComponentConnector=connect(mapStateToProps,mapDispatchToProps);


export default ComponentConnector(instruction);
