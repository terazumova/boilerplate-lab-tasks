import Draggable from 'draggable';

import './style.styl';

const element = document.querySelector('.circle');
const options = {
  grid: 10
};

const draggable = new Draggable(element, options);
