import {started_game,set_Instruction,Fetch_Deck_Result} from "./type";
export const start_game=()=>{
    return{
    gameStarted:true,
    type:started_game
    }
};
export const cancel_game={

    gameStarted:false,

    type:started_game

};
export const expandInstruction={

    instruction:true,
    type:set_Instruction

};
export const cancelInstruction={
    instruction:false,
    type:set_Instruction

};

