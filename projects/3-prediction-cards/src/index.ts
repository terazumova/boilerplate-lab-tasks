import 'playing-card';

import './style.styl';

const card = document.querySelector('.card');

const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const rank = ranks[Math.floor(Math.random() * ranks.length)];

const suits = ['D', 'H', 'C', 'S'];
const suit = suits[Math.floor(Math.random() * suits.length)];

card.setAttribute('rank', rank);
card.setAttribute('suit', suit);
