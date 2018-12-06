import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButtonHome"><Link to='/'>home</Link></li>
	        <li className="navButtonAbout"><Link to='/AboutUs'>about</Link></li>
          <li className="navButtonGear"><Link to='/Gear'>gear</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;
