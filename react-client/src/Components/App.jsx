import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Gear from './Gear';
import Gallery from './Gallery';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/AboutUs" component={AboutUs} />
          <Route name="gear" exact path="/Gear" component={Gear} />
          <Route name="gallery" exact path="/Gallery" component={Gallery} />
        </div>
      </Router>
    )
  }
}

export default App;
