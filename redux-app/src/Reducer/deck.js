import {Deck1} from '../action/type';
import Fetch from './fetch';
const Deck_Setting={Deck_id:0,
    message:'',
    FetchState:''}

const Deck=(state=Deck_Setting,action)=>{

    switch(action.type)
    {
        case Deck1.Deck_Success:
         
         const remaining=action.remaining;    
        return{
                    ...state,remaining,Deck_id:action.deck_id,FetchState:Fetch.success
            };

        case Deck1.Deck_Error:
            return{
                ...state,message:action.message,FetchState:Fetch.Error
            }    
               // break;
                default:
                        return state;


    }
    
};
export default Deck;