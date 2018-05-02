const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');

const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes));
};

const whenFishesFailToLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesFailToLoad);
};

module.exports = initializer;
