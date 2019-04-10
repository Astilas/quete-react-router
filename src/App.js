import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import History from './History'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
          <ul>
            <Route path='/' exact component={Home} />
            <Route path='/notre-histoire' component={History} />
            <li><NavLink exact to ='/'> Home</NavLink> </li>
            <li><NavLink to ='/notre-histoire' activeStyle={
              {color: 'red'}
            }> History </NavLink></li>
          </ul>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;