import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux';
import {cancelInstruction,expandInstruction} from '../action/setting';
import App from './App';
class instruction extends React.Component {
  
  render(){
 // console.log("this",this);
  return (
    <div>
      <div className="game">
      
        <hr/>
      <h2>Game Instruction</h2>
      
        {
        this.props.instruction ?

        (
          <div>
            <h2>
              Here Expand Instruction!
              
            </h2>
            <button onClick={this.props.cancelIns}>collapse Instruction</button>
          </div>
        ):
        (
          <div>
            <h2>
              Here Collapse Instruction!  
            </h2>
            <button onClick={this.props.expand}>Expand Instruction</button>
          
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
  instruction:state.Setting.instruction,
  gameStarted:state.Setting.gameStarted
  
}

};
const mapDispatchToProps=disptch=>{
   
  return{
  
  expand:()=> disptch(expandInstruction()),
  cancelIns:()=>disptch(cancelInstruction())

   };

}
const ComponentConnector=connect(mapStateToProps,
  mapDispatchToProps);


export default ComponentConnector(instruction);
