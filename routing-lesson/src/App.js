import React, { Component } from 'react';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Users from './components/Users';
import User from './components/User';
import NotFound from './components/NotFound'

import importedUsers from './users.json'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/:id" render={(props) => {
            return (<User people={importedUsers} {...props}/>)
          }} />
          <Route path="/users" render={(props) => {
            return (<Users people={importedUsers} {...props} />)
          }} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
