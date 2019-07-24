import {combineReducers} from 'redux';
import deck from './deck';
import setting from './setting'

export default combineReducers(
    {Deck:deck,
        Setting:setting
    });