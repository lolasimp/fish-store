const loadFishes = require('./fishes');

const whenFishesLoad = (data) => {
  console.log('data', data);
};

const whenFishesFailToLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesFailToLoad);
};

module.exports = initializer;
