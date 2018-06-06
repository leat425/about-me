'use strict';

alert('This page will contain information about myself Before it displays, let\'s start with a silly game where you will answer with a Yes or No to a series of questions.  Are you ready to start the game?');

//Ask for user preferred name
var userName = prompt('Firstly, what is your preferred name?');
console.log('Confirm user input for preferred name: '+ userName);


//Question 1:
var codeExperience = prompt('Do you think I have any coding experience?').toLowerCase();
console.log('Confirm user input for having coding experience: '+ codeExperience);

if (codeExperience === 'no' || codeExperience === 'n') {
  alert(userName +', you are correct! I have no coding experience');
} else if (codeExperience === 'yes' || codeExperience === 'y') {
  alert(userName +', thanks for thinking so highly of me.  Reality, I have no experience at all!');
} else {
  alert('Please re-enter answer in Yes or No format');
}

//Question 2:
var veryTall = prompt('I am very tall, do you think I am over 6 feet tall? ').toLowerCase();
console.log('Confirm user input for over 6 feet tall: ' + veryTall);

if (veryTall === 'no' || veryTall === 'n') {
  alert('You are correct! I am under 6 feet tall');
} else if (veryTall === 'yes' || veryTall === 'y') {
  alert('Thanks for being so polite but we all know that is not true!');
} else {
  alert('Please re-enter answer in Yes or No format');
}

//Question 3
var anySister = prompt('Do I have any sisters? ').toLowerCase();
console.log('Confirm user input for having any sister: ' + anySister);

if (anySister === 'no' || anySister ==='n') {
  alert('You are correct! I have no sister');
} else if (anySister === 'yes' || anySister === 'y') {
  alert('Nope, I have no sister');
} else {
  alert('Please re-enter answer in Yes or No format');
}

//Question 4
var myDad = prompt('If I told you my dad is Bruce Lee, would you believe me? ').toLowerCase();
console.log('Confirm user input for Bruce Lee as my dad: ' + myDad);

if (myDad === 'no' || myDad === 'n') {
  alert('Correct, my dad is NOT Bruce Lee');
} else if (myDad === 'yes' || myDad === 'y') {
  alert('Sorry, my dad is not Bruce Lee');
} else {
  alert('Please re-enter answer in Yes or No format');
}

//Question 5
var softwareDeveloper = prompt('Lastly, do you think I can become a software developer in the future?').toLowerCase();
console.log('Confirm user input for becoming a software developer: ' + softwareDeveloper);

if (softwareDeveloper === 'no' || softwareDeveloper === 'n') {
  alert('Perhaps you are correct, I will not become a developer');
} else if (softwareDeveloper === 'yes' || softwareDeveloper === 'y') {
  alert('I hope so too!');
} else {
  alert('Please re-enter answer in Yes or No format');

  alert('Thanks for answering all the silly questions');
}