import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Play from './pages/play';
import Work from './pages/work';
import Lura from './pages/lura';
import Events from './pages/events';

function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home}/>
        <Route exact path='/me' component={Home}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/play' component={Play}/>
        <Route exact path='/work' component={Work}/>
        <Route exact path='/lura' component={Lura}/>
        <Route exact path='/events' component={Events}/>
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;


