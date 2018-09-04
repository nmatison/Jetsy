export const createCart = (cart) => (
  $.ajax({
    method: 'post',
    url: 'api/shopping_carts',
    data: {cart}
  })
);