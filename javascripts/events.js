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
  $(e.target).text('Remove from Cart');
  $(e.target).on('click', removeFromCart);
};

const removeFromCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#available').append(fishCard);
  $(e.target).text('Add to Cart');
  $(e.target).on('click', moveToCart);
};

const bindEvents = () => {
  $('button.add').on('click', moveToCart);
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;
