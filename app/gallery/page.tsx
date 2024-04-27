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
      <div className="gallery">
        <h1 className="galleryH1">gallery</h1>
      	<p className="galleryP">Here are some pictures...</p>
        <div className="pics">
        <div className="img1"><Image src={photo1} alt="ugh" /></div>
        <div className="img2"><Image src={photo2} alt="ugh" /></div>
        <div className="img3"><Image src={photo3} alt="ugh" /></div>
        <div className="img4"><Image src={photo4} alt="ugh" /></div>
        </div>
      </div>
    )
  }
}

export default Gallery;
