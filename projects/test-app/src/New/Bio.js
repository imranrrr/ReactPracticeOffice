import React,{Component} from 'react';

class Bio extends Component{

    constructor()
    {
        super();
        this.state=
        {
        bioInfo:false

        };
    this.readMore=this.readMore.bind(this);
    console.log("CLass",this);

    }
   
    readMore()
    {
        
       if(!this.state.bioInfo)
       {
        this.setState(
            {
                bioInfo:true
            }

        );
        console.log("true");
       }
       else{
        this.setState(
            {
                bioInfo:false
            }

        );
        console.log("false");
       }
    }
   
    render(){

        let i=this.state.bioInfo ? ( <div>the state of being a synonym is 
            called synonymy. For example, the
             words begin, start, commence, and initiate are 
             all synonyms of one another</div>) : null;

       
        return(
                <div>
                    <p>A synonym is a word or phrase that means 
                        exactly or nearly the same as another lexeme in 
                        the same language. Words that are synonyms are said 
                        to be synonymous, and the state of being a synonym is 
                        called synonymy. For example, the
                         words begin, start, commence, and initiate are 
                         all synonyms of one another
                    </p>
                <hr/>
                    <h5>{i}</h5>
                    <button onClick={this.readMore}>Read More</button>
                
                </div>

        );
    }
}
export default Bio;