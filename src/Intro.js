import React from 'react';

import './Intro.css';
import IntroMaterial from './IntroMaterial';

class Intro extends React.Component {

  handleStart = (e) => {
    e.preventDefault();
    this.props.onUpdateStage('quiz');
  }

  render() {
    return (
      <div>
        <div>
          <IntroMaterial image="styrofoam.jpg">Styrofoam</IntroMaterial>
          <IntroMaterial image="clothes.jpg">Clothes</IntroMaterial>
          <IntroMaterial image="paint2.png">Paint</IntroMaterial>
          <IntroMaterial image="batteries.jpg">Batteries</IntroMaterial>
        </div>
        <h1 className="heading">Can you recycle better than a Kindergartner?</h1>
        <div className="center">
          <a className="button button-large block-center" href="#" onClick={this.handleStart}>Ready? Go!</a>
        </div>
      </div>
    );
  }

}

export default Intro;
