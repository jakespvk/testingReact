import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from './NavBar.jsx';


class Gear extends Component {
  render() {
    return (
      <div id="gear">
        <h1 id="gearH1">gear</h1>
      	<p id="gearP">Jake and Sarah are California-based photographers
      	who shoot primarily portrait and landscape photos. They both
      	shoot on Canon cameras, and hope to be sponsored by Canon someday.</p>
      </div>
    )
  }
}

export default Gear;
