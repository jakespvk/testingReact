import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from './NavBar.jsx';


class AboutUs extends Component {
  render() {
    return (
      <div id="aboutUs">
        <h1 id="aboutUsH1">about</h1>
      	<p id="aboutUsP">Jake is a California-based photographer
      	who shoots primarily portrait and landscape photos. He
      	shoots on Canon cameras, and hopes to be sponsored by Canon
        someday.</p>
      </div>
    )
  }
}

export default AboutUs;
