import {Deck1} from "./type";

export const DeckSuccess=deckJson=>{

    const {remaining,deck_id}=deckJson;
    return {
    type:Deck1.Deck_Success,
    remaining,
    deck_id
    }
};
export const DeckError=error=>{

    
    return {
    type:Deck1.DeckError,
    message:error.message
    }
};

export const fetchNewDeck=()=>dispatch=>{

    return fetch('https://deckofcardsapi.com/api/deck/jekrlr7hv3nx/draw/')
        .then(response =>{
            if(response.status!==200){
                throw new Error('UnSuccessFull api request');
            }
            return response.json()})
        .then(json =>dispatch(DeckSuccess(json)))
        .catch(error=>dispatch(DeckError(error)))
        
    
};