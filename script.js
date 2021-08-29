'use strict';

//Selecting classes adn Id
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');
const score_0 = document.getElementById('score--0');
const score_1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current_0 = document.getElementById('current--0');
const current_1 = document.getElementById('current--1');

//Changing value of element
let totalScore, currentScore, activePlayer, playing;

const init = function () {
  totalScore = [0, 0];
  currentScore = 0; // After coming 1 it will become 0
  activePlayer = 0;
  playing = true;

  score_0.textContent = 0;
  score_1.textContent = 0;
  current_0.textContent = 0;
  current_1.textContent = 0;

  dice.classList.add('hidden');
  player_0.classList.remove('player--winner');
  player_1.classList.remove('player--winner');
  player_0.classList.add('player--active');
  player_1.classList.remove('player--active');
};

init();
const switchingPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};
//Rollign dice functionally
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generating a random number
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    //Showing the dice images
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    //Chaking the statement
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchingPlayer();
    }
  }
});

// Roll functionality

btnHold.addEventListener('click', function () {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      switchingPlayer();
    }
  }
});

document.querySelector('.btn--new').addEventListener(
  'click',
  init
  // playing = true;
  // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  // totalScore = [0, 0];
  // currentScore = 0;
  // document.querySelector(`#current--${activePlayer}`).textContent = 0;
  // document.getElementById('score--0').textContent = 0;
  // document.getElementById('score--1').textContent = 0;
  // activePlayer = 0
);
