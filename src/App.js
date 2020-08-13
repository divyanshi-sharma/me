import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Play from './pages/play';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/play' component={Play}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;


