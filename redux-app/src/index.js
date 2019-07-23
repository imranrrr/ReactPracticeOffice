import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import Ins from './component/instruction';
import RootReducer from '../src/Reducer/index';
//import { privateName } from '@babel/types';

const store=createStore(RootReducer);


console.log("store",store);
console.log("store.getstate()",store.getState());

store.subscribe(()=>console.log("store.getstate()",store.getState()));

// const action1={
//     gameStarted:true,
//     type:'get_game_started'

// };
// store.dispatch(action1);



// store.dispatch(start_game);
// store.dispatch(expandInstruction);
// store.dispatch(cancel_game);
// store.dispatch(cancelInstruction);


ReactDOM.render(
<Provider store={store}><Ins /></Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
