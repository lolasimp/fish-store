// Filter fish that are "on sale"

// Add fish to "Basket"
const moveToCart = (e) => {
 let fishCard = $(e.target).closest('.fish');
  // console.log('fishCard', fishCard);
  $('#snagged').append(fishCard);
  // $('input').val();
}

$('button.add').click(moveToCart);