import React from 'react';

import { imagePath } from './util';
import './IntroMaterial.css';

class IntroMaterial extends React.Component {

  render() {
    return (
      <div className="intro-material--wrapper">
        <div className="intro-material--image" style={{ backgroundImage: `url(${imagePath(this.props.image)})` }}></div>
        <div className="intro-material--text">{this.props.children}</div>
      </div>
    );
  }

}

export default IntroMaterial;
