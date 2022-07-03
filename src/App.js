import React from 'react';
import { AuthProvider } from './hooks/useAuth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Contact, About, Search, Login, Profile, NotFound } from './pages';
import { Header, Footer } from './components';
import './styles/common.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className='container'>
          <div className='background' />
          <div className='background-cover' />
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/search' component={Search} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;