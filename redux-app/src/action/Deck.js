import {Fetch_Deck_Result} from "./type";

export const Fetch_Deck=deckJson=>{

    const {remaining,deck_id}=deckJson;
    return {
    type:Fetch_Deck_Result,
    remaining,
    deck_id
    }
};