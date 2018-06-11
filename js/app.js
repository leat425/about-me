'use strict';
var counter = 0;

//Ask for user preferred name

alert('This page will contain information about myself. Before it displays, let\'s start with a silly game where you will answer with a Yes or No to a series of questions.  Are you ready to start the game?');
var userName = prompt('Firstly, what is your preferred name?');
console.log('Confirm user input for preferred name: '+ userName);

var answerFalse = 'Please re-enter answer in Yes or No format';
var answerInCorrect = 'incorrect guess';
var answerCorrect = 'correct guess';

var questionOne = 'Do you think I have any coding experience?';
var questionTwo = 'I am very tall, do you think I am over 6 feet tall?';
var questionThree = 'Do I have any sisters?';
var questionFour = 'If I told you my dad is Bruce Lee, would you believe me?';
var questionFive = 'Do you think I can become a software developer in the future?';

function questionFunction(question) {
  var userInput = prompt(question).toLowerCase();
  console.log('User input: ' + userInput);
  if (userInput === 'no' || userInput === 'n') {
    alert(userInput + ' is a ' + answerCorrect);
    counter++;
  } else if (userInput === 'yes' || userInput === 'y'){
    alert(userInput + ' is an ' + answerInCorrect);
  } else {
    alert(answerFalse);
  }
}

questionFunction(questionOne);
questionFunction(questionTwo);
questionFunction(questionThree);
questionFunction(questionFour);
questionFunction(questionFive);

//Question 6: Please guess how many nieces I have?

var tooHigh = 'Your guess is too high';
var tooLow = 'Your guess is too low';

var guessCorrected = guessNieces();
if (guessCorrected === false) {
  guessCorrected = guessNieces();
  if (guessCorrected === false) {
    guessCorrected = guessNieces();
    if (guessCorrected === false) {
      guessCorrected = guessNieces();
      if (guessCorrected === false) {
        alert('Excellent try but that is the 4th attempt. I only have 5 nieces');
      }
    }
  }
}

function guessNieces() {
  var userInput = parseInt(prompt('Please guess how many nieces I have'));
  console.log('User input for number of nices : '+ userInput);
  if (userInput === 5) {
    alert('Fantastic guess and ' + userInput + ' is correct!');
    counter++;
    return true;

  } else if (userInput > 5) {
    alert(tooHigh);
  } else {
    alert(tooLow);

  }
  return false;
}

//Question 7: Can you guess one of the 5 cities in the U.S. that I have visited?

var cityCorrected = false;

var visitedCity = ['san francisco', 'chicago', 'st.louis', 'las vegas', 'minnesota'];

cityCorrected = guessCity();
if (cityCorrected === false) {
  cityCorrected = guessCity();
  if (cityCorrected === false) {
    cityCorrected = guessCity();
    if (cityCorrected === false) {
      cityCorrected = guessCity();
      if (cityCorrected === false) {
        cityCorrected = guessCity();
        if (cityCorrected === false) {
          alert('Your guesses are close but that is the 6th attempt.  The cities that I visited are San Francisco, Chicago, St.Louis, Las Vegas, Minnesota');
        }
      }
    }
  }
}

function guessCity() {
  var userInput = prompt('Can you guess one of the cities in the U.S. that I have visited?').toLowerCase();
  console.log('User input City: ' + userInput);
  if (visitedCity.includes(userInput)) {
    alert('That is correct!  Here are the cities that I visited: San Francisco, Chicago, St.Louis, Las Vegas, Minnesota');
    counter++;
    return true;
  }
  return false;
}

alert('You have correctly guessed ' + counter + ' out of 7.');
console.log('Number of guesses that are corrected: '+ counter);