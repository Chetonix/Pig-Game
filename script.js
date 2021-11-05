'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

//another way to select ids
//const score1 = document.getElementById('score--1');

//Making the scores be 0 at the start
score0El.textContent = 0;
score1El.textContent = 0;
//Hidding the dice image at the start
diceEl.classList.add('hidden');
