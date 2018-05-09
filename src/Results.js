import React from 'react';

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
            <img src={`/images/${answers[i] ? 'check' : 'x'}.svg`} />
            <p>{question}</p>
          </div>
        ))}
        <h1 className="results--sign-up-title">Join Owen's List and make a difference</h1>
        <a className="button button-large block-center" href="https://owenslist.us17.list-manage.com/subscribe?u=20068737de57bb81d3a7aa4b4&id=e4e5f0287e">Sign Up!</a>
      </div>
    );
  }

}

export default Results;
