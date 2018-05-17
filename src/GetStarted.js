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
        <div className={classNames('answer--upper-left', 'answer--green')}>
          <div className="get-started--title">
            Meet Owen - he's 6 and has learned a lot about recycling!
          </div>
        </div>
        <div className="answer--upper-right get-started--logo" style={{ backgroundImage: `url(${imagePath('owenslist_logo.png')})` }}></div>
        <div className="answer--bottom-right get-started--text">
          <p><strong>Owen's List is a project that shows you more ways to reuse and recycle in Seattle</strong></p>
          <p>Take this quiz to see if you know as much about recycling as Owen does</p>
          <p>(He scores 100% - can you?)</p>
          <a href="#" onClick={this.handleStart} className="button answer--next-button">next</a>
        </div>
        <div className="answer--bottom-left" style={{ backgroundImage: `url(${imagePath('owen_mag.png')})` }}></div>
      </div>
    );
  }
}

export default GetStarted;
