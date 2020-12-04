import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from './NavBar.jsx';


class Gear extends Component {
  render() {
    return (
      <div id="gear">
        <h1 id="gearH1">gear</h1>
      	<p id="gearP">Jake's primary camera is a Canon EOS 7D and his favorite lens at the 	moment is his Canon 50mm f/1.4 USM</p>
      </div>
    )
  }
}

export default Gear;
