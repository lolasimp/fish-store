// 2. Filter fish that are "on sale" on click show on sale fish
const filterFish = () => {
  // If fish DOES NOT show on-sale hide it. Will show all with red border. replace hide with toggle and can go back and forth.
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

$('#show-sale').click(() => {
  changeButtonText();
  filterFish();
});

// 1. Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  // console.log('fishCard', fishCard);
  $('#snagged').append(fishCard);
  // $('input').val();
};

$('button.add').click(moveToCart);
