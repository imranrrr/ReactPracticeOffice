import {started_game,set_Instruction} from '../action/type';
    
const Default_Setting={
    gameStarted:false,
    instruction:false
};


const SettingReducer=(state=Default_Setting,action)=>{

    switch(action.type)
    {
        case started_game:
                return{...state, gameStarted:action.gameStarted };

    
        case set_Instruction:
                return{ ...state, instruction:action.instruction 
             };
                default:
                        return state;


    }
    
};
export default SettingReducer;