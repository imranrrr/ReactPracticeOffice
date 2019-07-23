import React,{Component} from 'react';
import Header from './Header';
class joke extends Component{


    state={ joke:{},jokes: [] };
    componentDidMount(){

        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response=>response.json())
        .then(json => this.setState({joke:json}));
    }
    fetchJokes()
    {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response=>response.json())
        .then(json => this.setState({jokes:json}))
      //  .catch(error=> alert(error.message));
    }
    render(){
        const{punchline,setup}=this.state.joke;
        
        console.log({punchline});
    return(
            <div>

            <h1>{punchline}</h1>
            <hr/>
            <h2>{setup}</h2>
           
            {
                this.state.jokes.map(jokess=>{
                console.log("error");
                    const { id,setup,punchline}=jokess;
                return<div>
                   <p key={id}>{setup}</p>
                   <p key={id}>{punchline}</p>
                   </div>
                
                }
                    
            )
            }
             <button onClick={this.fetchJokes}>
                Ten JOkes
            </button>
            
            </div>



    );
    
    }


}
export default joke;