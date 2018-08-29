import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Protected from './components/Protected';

import people from './users.json';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
    };
  }

  login() {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">login</Link>
            <Link to="/protected">private info</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users/:id" component={User} />
            <Route path="/users" render={props => <Users people={people} {...props} />} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" render={props => <Login login={this.login.bind(this)} {...props} />} />
            <Route
              path="/protected"
              render={props => (this.state.loggedIn ? <Protected {...props} /> : <Redirect to="/login" />)}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
