import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <Link className="navButtonHome" to='/'>home</Link>
          <Link className="navButtonAbout" to='/AboutUs'>about</Link>
          <Link className="navButtonGear" to='/Gear'>gear</Link>
          <Link className="navButtonGallery" to="/Gallery">gallery</Link>
        </ul>
      </header>
    )
  }
}
export default NavBar;
