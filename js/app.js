// 'use strict';

var counter = 0;

// // //Ask for user preferred name

// // alert('This page will contain information about myself Before it displays, let\'s start with a silly game where you will answer with a Yes or No to a series of questions.  Are you ready to start the game?');
// // var userName = prompt('Firstly, what is your preferred name?');
// // console.log('Confirm user input for preferred name: '+ userName);

// var answerFalse = 'Please re-enter answer in Yes or No format';
// var answerInCorrect = 'Incorrect guess';
// var answerCorrect = 'Correct guess';

// var questionOne = 'Do you think I have any coding experience?';
// var questionTwo = 'I am very tall, do you think I am over 6 feet tall?';
// var questionThree = 'Do I have any sisters?';
// var questionFour = 'If I told you my dad is Bruce Lee, would you believe me?';
// var questionFive = 'Do you think I can become a software developer in the future?';

// function questionFunction(n) {
//   var userInput = prompt(n).toLowerCase();
//   console.log('User input: ' + userInput);
//   if (userInput === 'no' || userInput === 'n') {
//     alert(answerCorrect);
//     counter++;
//   } else if (userInput === 'yes' || userInput === 'y'){
//     alert(answerInCorrect);
//   } else {
//     alert(answerFalse);
//   }
// }
// questionFunction(questionOne);
// questionFunction(questionTwo);
// questionFunction(questionThree);
// questionFunction(questionFour);
// questionFunction(questionFive);

// console.log('Number of questions guess correct: ' + counter);

//Question 6: Please guess how many nieces I have?


var tooHigh = 'Your guess is too high';
var tooLow = 'Your guess is too low';

var guessCorrected = false;
for (var i = 0; i < 4; i++) {
  guessCorrected = guessNieces();
  if (guessCorrected === true) {
    counter++;
    break;

  }
}
if (guessCorrected === false) {
  alert('Excellent try but that is the 4th attempt. I only have 5 nieces');
}

function guessNieces() {
  var userInput = parseInt(prompt('Please guess how many nices I have'));
  console.log('User input: '+ userInput);
  if (userInput === 5) {
    alert(answerCorrect);
    counter++;
    return true;

  } else if (userInput > 5) {
    alert(tooHigh);
  } else {
    alert(tooLow);

  }
  return false;
}




// var myNieces = 5;

// for (var i = 0; i < 4 ; i++) {
//   console.log('Number of try: ', i);

//   var guessNieces = parseInt(prompt('Please guess how many nieces I have?'));
//   console.log('Confirm user input is: ' + guessNieces);

//   if (guessNieces === myNieces) {
//     alert('That is correct! I have 5 wonderful nieces');
//     counter++;
//     break;
//   } else if (guessNieces > myNieces) {
//     if (i === 3) {
//       alert('That last guess was too high and also incorrect. That was the 4th attempt, maybe we should move on');
//     } else {
//       alert('Great guess but that number is too high, please guess again');
//     }
//   } else {
//     if (i === 3) {
//       alert('That last guess was too low and also incorrect. That was the 4th attempt, maybe we should move on');
//     } else {
//       alert('Great guess but that number is too low, please guess again.');
//     }
//   }
// }

// //Question 7: Can you guess one of the 5 cities in the U.S. that I have visited?

// var visitedCity = ['san francisco', 'chicago', 'st.louis', 'las vegas', 'minnesota'];
// var guessCorrected = false;

// //first loop to limit user to 6 guesses
// for(var j = 0; j < 6; j++) {
//   var guessCity = prompt('Can you guess one of the cities in the U.S. that I have visited?').toLowerCase();
//   console.log('Confirm user input: '+ guessCity);

//   //second loop (nested inside) to check answer against array strings for correction. False will keep the user inside loop or until 6 tries.
//   for (var i = 0; i < visitedCity.length; i++) {
//     if (guessCity === visitedCity[i]) {
//       guessCorrected = true;
//       console.log('Confirm user guess one of the city correctly: '+ guessCity);
//       break;
//     }
//   }
//   //Guess corrected
//   if(guessCorrected === true) {
//     alert('Great job! You have guess corrected. The cities that I have visited are ' + visitedCity);
//     counter++;
//     break;
//   }
//   else {
//     alert('Please try to guess again');
//   }
// }
// //Incorrect guess
// if(guessCorrected === false)
// {
//   alert('Your guesses are close but the cities that I visited are: '+ visitedCity);
// }

// //Last alert notify user the number of correct guesses
// alert(userName + ', you have correctly answered ' + counter + ' out of 7 questions. Thank you for playing the game.');
