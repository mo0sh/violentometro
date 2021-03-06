import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions2';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
import logo from './images/home.png';
import devf from './images/devf-white.png';

class App extends Component {
  constructor(props) {
    super(props);    
    
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
    this.baseState = this.state;

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    const getResultWord = answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
    const test = answersCountKeys.includes("red");
    console.log(answersCount);
    console.log(answersCountKeys);
    console.log(answersCountValues);
    console.log(maxAnswerCount);
    if (test === true) {
      return ["red"];
    }
    return getResultWord;
  }

  
  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
  

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  resetApp = () => {
    this.setState(this.baseState, this.componentDidMount)
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Violentómetro"/>
        </header>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        {this.state.result ? <span className="Again" onClick={this.resetApp}> Otra vez</span> : <span></span>}
        <div className="devf">
          <p>Proyecto de aprendizaje por:</p>
          <img src={devf}  alt="Violentómetro"/>
        </div>
      </div>
    );
  }
}

export default App;
