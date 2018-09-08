export const fetchCartItems = (cart_item) => (
  $.ajax({
    method: 'get',
    url: "api/shopping_cart_items",
    data: {cart_item}
  })
)

export const createCartItem = (cart_item) => (
  $.ajax({
    method: 'post',
    url: 'api/shopping_cart_items',
    data: {cart_item}
  })
);

export const deleteCartItem = (itemId) => (
  $.ajax({
    method: 'delete',
    url: `/api/shopping_cart_items/${itemId}`
  })
);
