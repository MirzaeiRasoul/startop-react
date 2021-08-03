import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';

import { Home, Contact, About, Search, NotFound } from './pages';

import './styles/common.css';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <div className="background" />
        <div className="background-cover" />
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;