import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux';
import {start_game,cancel_game} from '../action/setting';
import {fetchNewDeck} from '../action/Deck';
import In from './instruction';
import Fetch from '../Reducer/fetch';
import Card from './DrawCArd';
class App extends React.Component {
  
     start=()=>{

      this.props.start_game();
     this.props.fetchNewDeck();

    }
  
  render(){
  // console.log("this",this.getState());
  return (
    <div>
      
      <div className="game">
      <h2>Card Game</h2>
      <Card/>
      {
        this.props.gameStarted ? (
          <div>
             <h3>Game is on! </h3>
            
             <button onClick={this.props.cancel_game}>Cancel Game</button> 

            </div>

        ):
        (
          <div>
            
            <h3>A new GAme awaits  </h3>
            <button onClick={this.start}>Start Game</button>
            <In />
            </div>
        )
      }

       
      </div>



    </div>



  );
}
}
const mapStateToProps=state=>{

console.log('iiii',state);
const {gameStarted,instruction}=state.Setting;
const {message,FetchState}=state.Deck;
return{gameStarted,instruction,message,FetchState}


}

// const mapDispatchToProps=disptch=>{
   
//   return{
//   start:()=> disptch(start_game()),
//   cancel:()=> disptch(cancel_game),
//   fetch_D:()=>disptch(fetchNewDeck())
 

//    };

// }
const ComponentConnector=connect(mapStateToProps,
  {

  start_game,cancel_game,fetchNewDeck
});


export default ComponentConnector(App);
