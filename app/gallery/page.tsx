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
      <div class="gallery">
        <h1 class="galleryH1">gallery</h1>
      	<p class="galleryP">Here are some pictures...</p>
        <div class="pics">
        <div class="pic-vertical"><Image src={photo1} fill style={{objectFit: "cover"}} /*height={}*/ alt="ugh" /></div>
        <div class="pic-vertical"><Image src={photo2} fill style={{objectFit: "cover"}} /*height={}*/ alt="ugh" /></div>
        <div class="pic-vertical"><Image src={photo3} fill style={{objectFit: "cover"}} /*height={}*/ alt="ugh" /></div>
        <div class="pic-horizontal"><Image src={photo4} fill style={{objectFit: "cover"}} /*height={}*/ alt="ugh" /></div>
        </div>
      </div>
    )
  }
}

export default Gallery;
