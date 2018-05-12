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
    image: 'latex_paint.png',
    description: 'Old latex paint tends to build up for different reasons. Sometimes we inherit it in a house we move into. Other times it goes out of date when we change colors. Now it can be recycled in Washington!',
    question: 'What is old latex paint turned into when it’s recycled?',
    answers: [
      'Crayons',
      'Clothing Dye',
      'New Latex Paint'
    ],
    correctAnswer: 'New Latex Paint',
    correctAnswerResult: 'New Latex Paint',
    correctAnswerDescription: 'can be created from recycled latex paint!',
    owenImage: 'paint-owen.jpg',
    compImage: 'new_paint.png',
    answerText: (
      <Fragment>
        <h3>Recycling old latex paint saves resources!</h3>
        <p>Instead of sending your unused latex paint to a landfill, you can recycle it locally!</p>
        <p>Our partner will accept all colors and quantities and will mix it in with other things to be able to create new colors that are as good as new. They will also recycle the cans!</p>
      </Fragment>
    )
  },
  {
    title: 'Styrofoam',
    image: 'styrofoam-large.png',
    description: 'We get things shipped to us in Styrofoam because it’s so light and durable. It takes up lots of space in our trash and can be recycled instead!',
    question: 'How many years does it take Styrofoam to break down in a landfill?',
    answers: [
      '10 Years',
      '500 Years',
      '1 Million Years'
    ],
    correctAnswer: '1 Million Years',
    correctAnswerResult: '1 Million Years',
    correctAnswerDescription: 'is how long it takes Styrofoam to breakdown in a landfill!',
    owenImage: 'styro_owen.png',
    compImage: 'caveman_days.png',
    answerText: (
      <Fragment>
        <h3>Styrofoam from cavemen could still be around!</h3>
        <p>Instead of filling up your trash can with Styrofoam, you can recycle it locally!</p>
        <p>Our partner accepts two different kinds of styrofoam as well as peanuts! They heat it up and form it into blocks that are later turned into things like picture frames and molding.</p>
      </Fragment>
    )
  },
  {
    title: 'Electronics',
    image: 'electronics-large.png',
    description: 'iPods, walkmen, flip phones. Many of ushave old electronics like this laying around. Many of them get thrown in the garbage, but we know better!',
    question: 'How many pounds of electronics does Seattle throw away every year?',
    answers: [
      '0.4 Million',
      '1.4 Million',
      '2.4 Million'
    ],
    correctAnswer: '1.4 Million',
    correctAnswerResult: '1.4 Million',
    correctAnswerDescription: 'pounds of electronics each year get thrown in the garbage!',
    owenImage: 'electronics_owen.png',
    compImage: 'electronics-comp.png',
    answerText: (
      <Fragment>
        <h3>That’s  more than the weight of 8k people!</h3>
        <p>Don’t throw your old electronics in the trash! You can recycle them instead!</p>
        <p>Our local partners will find out which of your old electronics have some life in them. None left? They can take them apart and use the metals and glass in new things. Win/Win!</p>
      </Fragment>
    )
  },
  {
    title: 'Light Bulbs',
    image: 'lightbulbs-large.png',
    description: 'Feeling dark because a light bulb or tube went out? Don’t make it worse by throwing them in the trash. It’s wasteful, dangerous and could be against the law!',
    question: 'What type of light bulb legally must be recycled?',
    answers: [
      'Compact Fluorescent',
      'Incandescent',
      'Halogen'
    ],
    correctAnswer: 'Compact Fluorescent',
    correctAnswerResult: 'Compact Fluorescent',
    correctAnswerDescription: 'light bulbs must be recycled!',
    owenImage: 'bulbs_owen.png',
    compImage: 'cfl_bulbs.png',
    answerText: (
      <Fragment>
        <h3>But other types of light bulbs can be recycled too!</h3>
        <p>CFLs are dangerous because they contain mercury. Make sure to recycle these!</p>
        <p>But our partner can recycle other kinds too! This process extracts the glass and metal and recycles it into new things.</p>
      </Fragment>
    )
  },
  {
    title: 'Plastic Film',
    image: 'plastics-large.png',
    description: 'Plastic bags are everywhere, including filling up our oceans. Many people mistakenly try to recycle these and that comes with another set of problems. Recycle it instead!',
    question: 'How many pounds of plastic film does Seattle throw away every year?',
    answers: [
      '2,586,717',
      '1,368,796',
      '4,348,987'
    ],
    correctAnswer: '2,586,717',
    correctAnswerResult: '2.6 Million',
    correctAnswerDescription: 'pounds of plastic film each year!',
    owenImage: 'bags_owen.png',
    compImage: 'plastics-comp.png',
    answerText: (
      <Fragment>
        <h3>That’s more than three 747 airplanes!</h3>
        <p>Instead of throwing away your plastic film, recycle it!</p>
        <p>Drop-off recycling for plastic film makes sure it doesn’t cause problems that can happen when it goes in your traditional bins. Instead, you can help turn it into decking material!</p>
      </Fragment>
    )
  },
  {
    title: 'Clothing and Shoes',
    image: 'clothes-large.png',
    description: 'Clothes and shoes stop being useful for all kinds of reasons. Sometimes they go out of style. Other times they tear or get stained. No matter the cause, nearly all can avoid the trash!',
    question: 'How many pounds of clothing and shoes does Seattle throw away every year?',
    answers: [
      '3,458,903',
      '11,825,657',
      '2,365,786'
    ],
    correctAnswer: '11,825,657',
    correctAnswerResult: '11.8 Million',
    correctAnswerDescription: 'pounds of clothing and shoes each year!',
    owenImage: 'threads_owen.png',
    compImage: 'clothes-comp.png',
    answerText: (
      <Fragment>
        <h3>That’s more than the space needle!</h3>
        <p>Instead of throwing away all of your old clothes and shoes, you can recycle them instead!</p>
        <p>Our local partners first see if old clothes and shoes can still be worn. If that’s not possible, they will turn the materials into new things like insulation and other types of clothing!</p>
      </Fragment>
    )
  },
  {
    title: 'Batteries',
    image: 'batteries-large.jpg',
    description: 'Batteries are made of a combination of metals and chemicals. When they run out, you can do better than throwing them in the trash where they can cause damage to our planet.',
    question: 'How many pounds of batteries does Seattle throw away every year?',
    answers: [
      '83,705',
      '46,879',
      '76,324'
    ],
    correctAnswer: '83,705',
    correctAnswerResult: '84K',
    correctAnswerDescription: 'pounds of batteries each year!',
    owenImage: 'batteries_owen.png',
    compImage: 'batteries-comp.png',
    answerText: (
      <Fragment>
        <h3>That’s more than 8 cars!</h3>
        <p>Instead of throwing batteries into the garbage, you can recycle them and keep them safe!</p>
        <p>Our partners make sure the chemicals from batteries don’t cause any damage to our environment. Even better, they can also recover metals they are made out of!</p>
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

  scrollToTop = () => { window.scrollTo(0,0); }

  updateStage = (newStage) => {
    this.setState({ stage: newStage }, this.scrollToTop);
  }

  handleAnswer = (isCorrect) => {
    this.setState({
      stage: 'answer',
      isCorrect,
      answers: this.state.answers.concat([ isCorrect ])
    }, this.scrollToTop);
  }

  handleNextPage = () => {
    const nextStage = this.state.pageIndex === CONTENT.length - 1 ? 'results' : 'quiz';
    this.setState({ stage: nextStage, pageIndex: this.state.pageIndex + 1 }, this.scrollToTop);
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
