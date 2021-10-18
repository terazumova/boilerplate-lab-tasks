import './index.styl'

import coffeeImage from './coffee.jpg'

coffeeElement = document.querySelector('.coffee-image')
app = document.querySelector('.app')

coffeeText = document.querySelector('.coffee-text')

coffeeElement.src = coffeeImage

coffeeElement.addEventListener 'click', =>
  coffeeElement.classList.add('hidden')
  coffeeText.classList.remove('hidden')
