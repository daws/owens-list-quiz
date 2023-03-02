import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from './Intro';
import GetStarted from './GetStarted';
import Quiz from './Quiz';
import Answer from './Answer';
import Results from './Results';

const CONTENT = [
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
        <p>Our local partners accept several different kinds of Styrofoam! They heat it up and form it into blocks (called densifying) that are later turned into things like picture frames and crown molding.</p>
      </Fragment>
    )
  },
  {
    title: 'Batteries',
    image: 'batteries-large.jpg',
    description: 'Batteries are made of a combination of metals and chemicals. When they run out, you can do better than throwing them in the trash where they can cause damage to our planet.',
    question: 'How many pounds of batteries do people in the US throw away each year?',
    answers: [
      '300,000 pounds',
      '1 million pounds',
      '3 billion pounds'
    ],
    correctAnswer: '3 billion pounds',
    correctAnswerResult: '3 billion pounds',
    correctAnswerDescription: 'of batteries are thrown in the garbage each year in the United States!',
    owenImage: 'batteries_owen.png',
    compImage: 'batteries-comp.png',
    answerText: (
      <Fragment>
        <h3>That’s more than 90,000 cars!</h3>
        <p>Instead of throwing batteries into the garbage, you can recycle them and keep them safe!</p>
        <p>Our partners make sure the chemicals from batteries don’t cause any damage to our environment. Even better, they can also recover metals they are made out of!</p>
      </Fragment>
    )
  },
  {
    title: 'Latex Paint',
    image: 'latex_paint.png',
    description: 'Old latex paint tends to build up for different reasons. Sometimes we inherit it in a house we move into. Other times it goes out of date when we change colors.',
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
        <p>Instead of sending your unused latex paint to a landfill, you can often recycle it locally!</p>
        <p>We work with local partners to recycle latex paint of many colors and quantities to be able to create new paint that is good as new. The cans also can be recycled!</p>
      </Fragment>
    )
  },
  {
    title: 'Plastic Film',
    image: 'plastic_film_hero.jpg',
    additionalImageClasses: ['quiz--plastic-film-image'],
    description: 'Plastic film (like bags, air pillows, bubble wrap, and plastic wrap) is everywhere, including filling up our oceans.  Many people mistakenly put plastic film in their curbside bins. Recycle it with Ridwell instead!',
    question: 'Why should you not put thin plastic in curbside recycling?',
    answers: [
      'It melts',
      'It gets caught in the machines',
      'It’s toxic'
    ],
    correctAnswer: 'It gets caught in the machines',
    correctAnswerResult: 'It gets caught in the machines',
    correctAnswerDescription: "is why you shouldn't put plastic film in your recycling bin!",
    owenImage: 'bags_owen.png',
    compImage: 'plastic_film.png',
    answerText: (
      <Fragment>
        <h3>Recycle it with Ridwell instead!</h3>
        <p>Instead of causing havoc in recycling machines and ending up in the landfill, you can recycle plastic film with Ridwell where it gets turned into outdoor furniture and decking material by our partner, Trex!</p>
        <p>2.3 million pounds of plastic film has been saved from the landfills by Ridwell members in just 4 years!</p>
      </Fragment>
    )
  },
  {
    title: 'Largest Category',
    image: 'big_reveal.png',
    description: 'One category gets thrown away so often that if you added it all up, it would surpass 22 billion pounds every year, just in the US! Most of this can be reused or recycled instead of sent to landfills!',
    question: 'What is the largest possible category of alternative recycling?',
    answers: [
      'Clothing and Shoes',
      'Tires',
      'Carpet and Rugs'
    ],
    correctAnswer: 'Clothing and Shoes',
    correctAnswerResult: 'Clothing and Shoes',
    correctAnswerDescription: 'is the largest possible alternate recycling category!',
    owenImage: 'threads_owen.png',
    compImage: 'statue_of_liberty.png',
    answerText: (
      <Fragment>
        <h3>22 billion pounds is about the weight of 400 Statues of Liberty!</h3>
        <p>Instead of throwing away all of your old clothes and shoes, you can recycle them instead!</p>
        <p>Our local partners first see if old clothes and shoes can still be worn. If that’s not possible, they will turn the materials into new things like insulation and other types of clothing!</p>
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
      case 'start':
        content = (<GetStarted onUpdateStage={this.updateStage} />);
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
