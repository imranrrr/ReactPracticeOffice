import {started_game,set_Instruction,Fetch_Deck_Result} from "./type";
export const start_game=()=>{
   console.log("startMEthod0");
    return{
    gameStarted:true,
    type:started_game
    }
};
export const cancel_game=()=>{

    return{
    gameStarted:false,

    type:started_game
    }
};
export const expandInstruction=()=>{

    return{
    instruction:true,
    type:set_Instruction
    }
};
export const cancelInstruction=()=>{
    return{

    instruction:false,
    type:set_Instruction
    }
};

