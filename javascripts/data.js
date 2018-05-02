const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');

const whenFishesLoad = (data) => {
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
};

const whenFishesFailToLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesFailToLoad);
};

module.exports = initializer;
