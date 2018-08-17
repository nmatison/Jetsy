export const fetchCartItems = (cart) => (
  $.ajax({
    method: "get",
    url: '/api/shopping_carts',
    data: {cart}
  })
);

export const createCart = (cart) => (
  $.ajax({
    method: "post",
    url: "/api/shopping_carts",
    data: {cart}
  })
);
