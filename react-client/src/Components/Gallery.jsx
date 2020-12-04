import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from './NavBar.jsx';
import photo1 from './photos/IMGM1736copy.jpg';
import photo2 from './photos/IMGL3385copy.jpg';
import photo3 from './photos/IMGL2139copy.jpg';

class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <h1 id="galleryH1">gallery</h1>
      	<p id="galleryP">Here are some pictures...</p>
        <img src={photo1} alt="ugh" />
        <img src={photo2} alt="ugh" />
        <img src={photo3} alt="ugh" />
      </div>
    )
  }
}

export default Gallery;
