import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'
import { mineCoin }  from './state/actions';

const triviaQuestions = [
    {id: 1, question: 'What does CSS stand for?', answer: 'Cascading Style Sheets'},
    {id: 2, question: 'What is the correct HTML tag for referring to an external style sheet?', answer: 'link'},
    {id: 3, question: 'Where in an HTML document is the correct place to refer to an external style sheet?', answer: 'head'},
    {id: 4, question: 'What year was Neptune discovered?', answer: '1846'},
    {id: 5, question: 'In the TV show The Simpsons, what actor is the voice of Comic Book Guy?', answer: 'Hank Azaria'},
    {id: 6, question: 'What is the study of moths and butterflies called?', answer: 'Lepidopterology'},
    {id: 7, question: 'How many laps must a driver survive to win the Indianapolis 500?', answer: '200'},
    {id: 8, question: 'Who is The Friendly Ghost?', answer: 'Casper'},
    {id: 9, question: 'What is Ace Venturas occupation in the movies by the same name?', answer: 'Pet Detective'},
    {id: 10, question: 'Facebook was originally developed as a social tool for students at which university?', answer: 'Harvard'},
    {id: 11, question: 'Annapolis is the capital of which US state?', answer: 'Maryland'},
    {id: 12, question: 'How many feet is a fathom?', answer: '6'},
    {id: 13, question: 'What popular Walt Disney character shares a name with a planet?', answer: 'Pluto'},
    {id: 14, question: 'What was Ash Ketchums first Pokemon?', answer: 'Pikachu'},
    {id: 15, question: 'What peg-legged pirate had a parrot named Captain Flint?', answer: 'Long John Silver'},
    {id: 16, question: 'Who is Snoopys arch enemy?', answer: 'The Red Baron'},
    {id: 17, question: 'How old was Sean Connery when he first appeared as James Bond?', answer: '32'},
    {id: 18, question: 'What kind of a car travels through time in the movie Back to the Future?', answer: 'DeLorean'},
    {id: 19, question: 'In 1993, what name did Intel give to its new 80586 line of chips?', answer: 'Pentium'},
    {id: 20, question: 'What year was inventor Alexander Graham Bell born in?', answer: '1847'},
    {id: 21, question: 'How many sides does a nonagon have?', answer: '9'},
    {id: 22, question: 'What type of animal is a wahoo?', answer: 'Fish'},
    {id: 23, question: 'The Gulf War occurred after Iraq invaded what country?', answer: 'Kuwait'},
    {id: 24, question: 'Who was the second man to walk on the Moon?', answer: 'Buzz Aldrin'},
    {id: 25, question: 'Who created the character of Fozzie Bear?', answer: 'Jim Henson'}
    ]

const getQuestion = () => {
    const questionNum = Math.round(Math.random() *20)
    console.log(questionNum);
    const question = triviaQuestions.find((q) => q.id === questionNum) 
    console.log(question);
    return question;
}

class Mine extends Component {
    constructor(props){
        super(props);
        this.state = {
            //questions: triviaQuestions,
            answerInput: '',
            currentQuestion: getQuestion(),
            correctAnswer: undefined
        }
        this.reset = this.reset.bind(this);
    }

    handleSubmitAnswer(e) {
        e.preventDefault();
        console.log("Inside handelSubmit")
        let guess
        let answer = this.state.answerInput.toLowerCase();
        let correctAnswer = this.state.currentQuestion.answer.toLowerCase();
        if (answer === correctAnswer){
            guess = true;
            this.props.mineCoin();
        } else guess = false
        //console.log("answer: "+ answer)
        //let guess = this.state.answerInput.toLowerCase() === this.state.currentQuestion.answer.toLowerCase() ? true : false
        //console.log("guess: "+ guess);
        this.setState({correctAnswer: guess})
     
    }

    reset(e) {
        e.preventDefault();
        this.setState({answerInput: '', correctAnswer: undefined, currentQuestion: getQuestion()} )
    }

    render() {

        return (
            <div>
                <h1>Mine ShintoCoins</h1>
                <p>Here you can mine ShintoCoins by being the first to solve the algorithm:</p>

                <p>{this.state.currentQuestion.question}</p>

                <form onSubmit={this.handleSubmitAnswer.bind(this)}>
                    <input type="text" 
                    onChange={(e) => {this.setState({answerInput: e.target.value})}}
                    value={this.state.answerInput} />
                    <button>Mine</button>
                </form>
                {this.state.correctAnswer === true && 
                <div>
                    <h2 style={{color: 'green'}}>Correct!</h2>
                    <p>One ShintoCoin has been added to your balance!</p>
                    <button onClick={this.reset}>Try Again</button>
                </div>
                } 
                {this.state.correctAnswer === false &&
                <div>
                    <h2 style={{color: 'red'}} >Incorrect!</h2>
                    <p>The correct answer was "{this.state.currentQuestion.answer}".</p>
                    <button onClick={this.reset}>Try Again</button>
                </div>    
            }
                
            </div>
        )
    }


}

const mapDispatchToProps = dispatch => {
    return {
        mineCoin: () => dispatch(mineCoin())
    }
}

export default connect(null, mapDispatchToProps)(Mine)