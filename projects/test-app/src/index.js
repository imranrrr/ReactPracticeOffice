import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Arrow from './playground/arrow-finction';
import * as serviceWorker from './serviceWorker';
import Bio from './New/Bio';
import Counter from './New/count';
import Practice from './component/PracticeState';
import Joke from './component/jokes';
import Project from './data/projects';
import {Router, Switch,Route} from 'react-router-dom';
import creatBrowserHistory from 'history/createBrowserHistory';
import Header from './component/Header';
const history=creatBrowserHistory();


ReactDOM.render(

    <Router history={history}>
        <Switch>
            <Route exact path='/' render={()=> <Header><App/></Header>}/>
            <Route path='/count' render={()=> <Header><Counter/></Header>}/>
            <Route path='/jokes' render={()=> <Header><Joke/></Header>}/>
            <Route path='/project' render={()=> <Header><Project/></Header> }/>


        </Switch>


    </Router>
    
    
    ,document.getElementById('root'));

new Promise(resolve=>{
    setTimeout(()=>{
        console.log("imran");
        resolve();
    },2000);

})


.then(()=>{
    console.log("kamran");
    console.log("hashmi");
     

})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
