import React, { Fragment } from 'react';
import classNames from 'classnames';

import { imagePath } from './util';
import './Answer.css';
import './GetStarted.css';

class GetStarted extends React.Component {

  handleStart = (e) => {
    e.preventDefault();
    this.props.onUpdateStage('quiz');
  }

  render() {
    return (
      <div>
        <div className={classNames('answer--upper-left', 'answer--green', 'get-started--upper-left')}>
          <div className="get-started--title">
            Meet Owen, when he was 6 a project he did with his dad would eventually lead to Ridwell!
          </div>
        </div>
        <div className="answer--upper-right get-started--logo" style={{ backgroundImage: `url(${imagePath('ridwell_logo.png')})` }}></div>
        <div className="answer--bottom-right get-started--text">
          <p><strong>Owen learned all about recycling while helping his neighbors in Seattle waste less</strong></p>
          <p>Take this quiz to see if you know as much about recycling as Owen does</p>
          <p>(He scores 100% - can you?)</p>
          <a href="#" onClick={this.handleStart} className="button answer--next-button">next</a>
        </div>
        <div className="answer--bottom-left get-started--bottom-left" style={{ backgroundImage: `url(${imagePath('owen_ryan_garage.jpg')})` }}></div>
      </div>
    );
  }
}

export default GetStarted;
