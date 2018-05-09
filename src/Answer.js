import React, { Fragment } from 'react';

import './Answer.css';

class Answer extends React.Component {

  handleClickNext = (e) => {
    e.preventDefault();
    this.props.onNextPage();
  }

  render() {
    const { isCorrect, content } = this.props;
    const { correctAnswerResult, correctAnswerDescription } = content;

    return (
      <div>
        <div className="answer--upper-left">
          <div className="answer--heading">{isCorrect ? 'You got it!' : 'So close!'}</div>
          <div className="answer--correct-answer">
            Seattle throws out
            <span className="answer--result"> {correctAnswerResult} </span>
            {correctAnswerDescription}
          </div>
        </div>
        <div className="answer--upper-right" style={{ backgroundImage: `url(/images/${content.compImage})` }}></div>
        <div className="answer--bottom-left" style={{ backgroundImage: `url(/images/${content.owenImage})` }}></div>
        <div className="answer--bottom-right">
          {content.answerText}
          <a href="#" onClick={this.handleClickNext} className="button answer--next-button">next</a>
        </div>
      </div>
    );
  }
}

export default Answer;
