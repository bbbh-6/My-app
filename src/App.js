import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import Message from './Components/Message/Message';
import Contact from './Components/Contact/Contact';
import About from "./Components/About/About";
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            < div>
                < Header />
                < div className = "intro" >
                    <Route path='/Message' component={Message}/>
                    <Route path='/Posts' component={Posts}/>
                    <Route path='/Contact' component={Contact}/>
                    <Route path='/About' component={About}/>
                < /div>

            < /div>
        </BrowserRouter>
);
}

export default App;
