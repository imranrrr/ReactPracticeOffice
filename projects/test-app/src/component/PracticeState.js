import React, {Component} from 'react';
import Projects from '../data/projects';
import Practice from '../New/Practice';

const TITLES=['BSSE','BSCS','ELEC','PHY','CHE'];

class PracticeState extends Component{

 state ={
     index:0,
     fadeIn:true
    }

    // incrementIndex=()=>{

    //     if(this.state.index<5)
    //     {
    //     this.setState(
    //         {
    //         index:this.state.index+1
    //         }

    //     )
    //     }
    //     else{
    //         this.setState(
    //             {
    //                 index:0
    //             }
    //         )
    //     }
    // }


   componentDidMount()
   {

    console.log("false:2000");
    this.timeout=setTimeout(()=>{
            this.setState({fadeIn:false})},2000
        );
        this.animatedTitles();

   }
   componentWillUnmount(){

    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
    console.log("willUN");
   }
    animatedTitles=()=>{
        console.log("animated:2000");

    this.titleInterval=setInterval(()=>{

    this.setState({
        index:(this.state.index+1)%TITLES.length
    ,fadeIn:true});
    this.timeout=setTimeout(()=>{
        this.setState({fadeIn:false})},2000
    );


},4000);
}


    render()
    {
        console.log("render");

        const v=TITLES[this.state.index];
        
        const{fadeIn,index}=this.state;
     
        return(

        <div>
                <h1>Array value according to index!</h1>
                <hr/>
                
                <h2 className={fadeIn ? "fade-in":"fade-out"}>{v}</h2>
                 
                <button onClick={this.incrementIndex}>Change Course</button>
        </div>

        );
    }


 }
 export default PracticeState;



