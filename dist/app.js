(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');
const applySale = require('./discount');

const whenFishesLoad = (data) => {
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
  applySale();
};

const whenFishesFailToLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesFailToLoad);
};

module.exports = initializer;

},{"./discount":2,"./events":3,"./fishDom":4,"./fishes":5}],2:[function(require,module,exports){
const discount = 0.2;

const applySale = () => {
  $('.on-sale').each((i, fishCard) => {
    const basePriceElem = $(fishCard).find ('.price');
    const basePrice = basePriceElem.html() * 1;
    const newPrice = (basePrice * (1 - discount)).toFixed(2);
    basePriceElem.html(newPrice);
  });
};

module.exports = applySale;

},{}],3:[function(require,module,exports){
// Filter fish that are "on sale"
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

  // Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);
};

const bindEvents = () => {
  $('button.add').on('click', moveToCart);
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;

},{}],4:[function(require,module,exports){
const writeFishes = (fishes) => {
  let domString = '';
  fishes.forEach((fish) => {
    domString += `<div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3">`;
    domString +=   `<div class="thumbnail">`;
    domString +=     `<img src="${fish.imageSoure}" alt="" width="40%">`;
    domString +=       `<div class="caption">`;
    domString +=         `<h3 id="thumbnail-label">${fish.name}</h3>`;
    domString +=           `<p>$`;
    domString +=             `<span class="price">${fish.basePrice}</span>`;
    domString +=            `</p>`;
    domString +=          `</div>`;
    domString +=                 `<div class="caption card-footer">`;
    domString +=        `<button class="add btn btn-danger">Add To Basket</button>`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = writeFishes;

},{}],5:[function(require,module,exports){
const loadFishes = (successFunction, errorFunction) => {
  $.get('../db/fishes.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = loadFishes;

},{}],6:[function(require,module,exports){
const initializer = require('./data');

initializer();

},{"./data":1}]},{},[6]);
