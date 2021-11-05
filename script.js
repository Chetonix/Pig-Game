'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//another way to select ids
//const score1 = document.getElementById('score--1');

//Making the scores be 0 at the start
score0El.textContent = 0;
score1El.textContent = 0;
//Hidding the dice image at the start
diceEl.classList.add('hidden');

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  //1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for rolled one; if true: switch the player
});
