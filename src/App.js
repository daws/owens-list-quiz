import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from './Intro';
import Quiz from './Quiz';
import Answer from './Answer';
import Results from './Results';

const CONTENT = [
  {
    title: 'Latex Paint',
    image: 'paint-large.jpg',
    description: 'Many people throw latex paint away. Some do this wet and that can get caught in our systems and damage trucks. Others dry it out. That involves chemicals and is very wasteful.',
    question: 'How many pounds of latex paint does Seattle throw away every year?',
    answers: [
      '83,705',
      '441,776',
      '1,102,116'
    ],
    correctAnswer: '441,776',
    correctAnswerResult: '441K',
    correctAnswerDescription: 'pounds of latex paint each year!',
    owenImage: 'paint-owen.jpg',
    compImage: 'paint-comp.jpg',
    answerText: (
      <Fragment>
        <h3>That's more than this house weighs!</h3>
        <p>Instead of sending your unused latex paint to a landfill, you can recycle it locally!</p>
        <p>Our partner will accept all colors and quantities and will mix it in with other things to be able to create new colors that are as good as new. They will also recycle the cans!</p>
      </Fragment>
    )
  },
  {
    title: 'Batteries',
    image: 'batteries-large.jpg',
    description: 'Many people throw latex paint away. Some do this wet and that can get caught in our systems and damage trucks. Others dry it out. That involves chemicals and is very wasteful.',
    question: 'How many pounds of latex paint does Seattle throw away every year?',
    answers: [
      '83,705',
      '441,776',
      '1,102,116'
    ],
    correctAnswer: '441,776',
    correctAnswerResult: '441K',
    correctAnswerDescription: 'pounds of latex paint each year!',
    owenImage: 'batteries_owen.png',
    compImage: 'paint-comp.jpg',
    answerText: (
      <Fragment>
        <h3>That's more than this house weighs!</h3>
        <p>Instead of sending your unused latex paint to a landfill, you can recycle it locally!</p>
        <p>Our partner will accept all colors and quantities and will mix it in with other things to be able to create new colors that are as good as new. They will also recycle the cans!</p>
      </Fragment>
    )
  }
];

class App extends Component {

  state = {
    stage: 'intro',
    pageIndex: 0,
    answers: []
  };

  updateStage = (newStage) => {
    this.setState({ stage: newStage });
  }

  handleAnswer = (isCorrect) => {
    this.setState({
      stage: 'answer',
      isCorrect,
      answers: this.state.answers.concat([ isCorrect ])
    });
  }

  handleNextPage = () => {
    const nextStage = this.state.pageIndex === CONTENT.length - 1 ? 'results' : 'quiz';
    this.setState({ stage: nextStage, pageIndex: this.state.pageIndex + 1 });
  }

  render() {
    let content;

    switch (this.state.stage) {
      case 'intro':
        content = (<Intro onUpdateStage={this.updateStage} />);
        break;
      case 'quiz':
        content = (<Quiz content={CONTENT[this.state.pageIndex]} onAnswer={this.handleAnswer} />);
        break;
      case 'answer':
        content = (
          <Answer
            content={CONTENT[this.state.pageIndex]}
            isCorrect={this.state.isCorrect}
            onNextPage={this.handleNextPage}
          />
        );
        break;
      case 'results':
        content = (<Results questions={CONTENT.map(c => c.title)} answers={this.state.answers} />);
        break;
    }

    return content;
  }

}

export default App;
