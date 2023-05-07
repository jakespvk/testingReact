"use client";

import React, { Component } from 'react';
import Link from "next/link";

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <Link className="navButtonHome" href='/testingReact/'>home</Link>
          <Link className="navButtonAbout" href='/testingReact/about'>about</Link>
          <Link className="navButtonGear" href='/testingReact/gear'>gear</Link>
          <Link className="navButtonGallery" href="/testingReact/gallery">gallery</Link>
        </ul>
      </header>
    )
  }
}
export default NavBar;
