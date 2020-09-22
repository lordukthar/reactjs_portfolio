
import React from 'react'

  import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  import Home from './Home';
  import About from './About';
  import Contact from './Contact';
  import Portfolio from './Portfolio';

  import UserList from "./UserList";

class App extends React.Component{

  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/portfolio'} className="nav-link">Portfolio</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


