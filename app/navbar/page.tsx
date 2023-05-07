"use client";

import React, { Component } from 'react';
import Link from "next/link";

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <Link className="navButtonHome" href='//'>home</Link>
          <Link className="navButtonAbout" href='/about'>about</Link>
          <Link className="navButtonGear" href='/gear'>gear</Link>
          <Link className="navButtonGallery" href="/gallery">gallery</Link>
        </ul>
      </header>
    )
  }
}
export default NavBar;
