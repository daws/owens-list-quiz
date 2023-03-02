import React from 'react';

import { imagePath } from './util';
import './Results.css';

class Results extends React.Component {

  render() {
    const { questions, answers } = this.props;
    const correct = answers.filter(a => a).length;

    return (
      <div className="results--wrapper">
        <h1>You got {correct}/{answers.length} right!</h1>
        {questions.map((question, i) => (
          <div key={question} className="results--item">
            <img src={`${imagePath(answers[i] ? 'check' : 'x')}.svg`} />
            <p>{question}</p>
          </div>
        ))}
        <h1 className="results--sign-up-title">Join Ridwell and make a difference</h1>
        <a className="button button-large block-center" href="https://www.ridwell.com/waitlist?rtid=T91bmx4">Sign Up!</a>
      </div>
    );
  }

}

export default Results;
