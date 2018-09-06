export const createCart = (cart) => (
  $.ajax({
    method: 'post',
    url: 'api/shopping_cart_items',
    data: {cart}
  })
);