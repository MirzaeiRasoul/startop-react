import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Contact, About, Search, Login, Profile, NotFound } from './pages';
import Footer from './components/Footer';

import AuthManager from './utils/AuthManager';

import './styles/common.css';

const App = () => {
  return (
    <Router>
      <AuthManager>
        <div className='container'>
          <div className="background" />
          <div className="background-cover" />
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </AuthManager>
    </Router>
  );
}

export default App;