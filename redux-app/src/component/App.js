import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux';
import {start_game,cancel_game} from '../action/setting';
import {Fetch_Deck} from '../action/Deck';
class App extends React.Component {
  
    start=()=>{

      this.props.start();
      fetch('https://deckofcardsapi.com/api/deck/jekrlr7hv3nx/draw/')
      .then(Response =>Response.json())
      .then(json =>this.props.fetch_D(json));


   }
  
  render(){
  console.log("this",this);
  return (
    <div>
      <div className="game">
      <h2>Card Game</h2>
      {
        this.props.gameStarted ? (
          <div>
             <h3>Game is on!</h3>
             <button onClick={this.props.cancel}>Cancel Game</button> 

            </div>

        ):
        (
          <div>
            <h3>A new GAme awaits</h3>
            <button onClick={this.start}>Start Game</button>
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
return{gameStarted:state.gameStarted,
  instruction:state.instruction
}

};
const mapDispatchToProps=disptch=>{
   
  return{
  start:()=> disptch(start_game()),
  cancel:()=> disptch(cancel_game),
  fetch_D:deckJson=>disptch(Fetch_Deck(deckJson))
 

   };

}
const ComponentConnector=connect(mapStateToProps,mapDispatchToProps);


export default ComponentConnector(App);
