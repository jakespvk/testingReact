'use client';

import React, { Component } from 'react';
import Image from "next/image";
import photo1 from './photos/IMGM1736copy.jpg';
import photo2 from './photos/IMGL3385copy.jpg';
import photo3 from './photos/IMGL2139copy.jpg';
import photo4 from './photos/IMGL1640.jpg';

class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <h1 id="galleryH1">gallery</h1>
      	<p id="galleryP">Here are some pictures...</p>
        <Image src={photo1} height={480} style={{padding:12}} alt="ugh" />
        <Image src={photo2} height={480} style={{padding:12}} alt="ugh" />
        <Image src={photo3} height={480} style={{padding:12}} alt="ugh" />
        <Image src={photo4} height={480} style={{padding:12}} alt="ugh" />
      </div>
    )
  }
}

export default Gallery;
