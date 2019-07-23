import {started_game,set_Instruction,
    Fetch_Deck_Result} from '../action/type';

const Default_Setting={
    gameStarted:false,
    instruction:false
};


const rootReducer=(state=Default_Setting,action)=>{

    switch(action.type)
    {
        case started_game:
                return{...state, gameStarted:action.gameStarted };

    
        case set_Instruction:
           
        console.log("DDdd",action.instruction);
                return{ ...state, instruction:action.instruction 
             };

        case Fetch_Deck_Result:
        const {remaining,deck_id}=action;    
        return{
                    ...state,remaining,deck_id
            };
               // break;
                default:
                        return state;


    }
    
};
export default rootReducer;