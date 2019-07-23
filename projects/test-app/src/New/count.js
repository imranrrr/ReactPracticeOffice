import React, {Component} from 'react';
import Projects from '../component/Projects';
import Joke from '../component/jokes';
import Header from '../component/Header';
class count extends Component{
    state={
        counter:0
    }
    
    addOne=()=>{

        this.setState(
            {
                counter:this.state.counter+1
            }
        )
        console.log(this.state.counter);
    }

    minusOne=()=>{

        this.setState(
            {
                counter:this.state.counter-1
            }
        )
        console.log(this.state.counter);
    }
    reset=()=>{
        this.setState(
            {
                counter:0
            }
        )
        console.log(this.state.counter);

    }

    render(){
      console.log("ji");
        return(
            <div>


                <h3>Counter : {this.state.counter}</h3>
                <hr/>
                <button onClick={this.addOne}>Add</button>
                <button onClick={this.minusOne}>Minus</button>
                <button onClick={this.reset}>Reset</button>
            <hr/>
     
               
           
            </div>

        );



    }


}
export default count;
