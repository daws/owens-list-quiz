import React from 'react';

import './Quiz.css';

class Quiz extends React.Component {

  handleClick = (answer, e) => {
    e.preventDefault();
    const isCorrect = answer === this.props.content.correctAnswer;
    this.props.onAnswer(isCorrect);
  }

  render() {
    const { image, title, description, question, answers } = this.props.content;
    return (
      <div>
        <div className="left-col">
          <div className="quiz--image" style={{ backgroundImage: `url(/images/${image})` }}></div>
          <div className="quiz--title">{title}</div>
        </div>
        <div className="right-col">
          <div className="quiz--description">{description}</div>
          <div className="quiz--question">
            <p>{question}</p>
            {answers.map(answer => (
              <a href="#" className="quiz--answer" key={answer} onClick={this.handleClick.bind(null, answer)}>{answer}</a>
            ))}
          </div>
        </div>
      </div>
    );
  }

}

export default Quiz;
