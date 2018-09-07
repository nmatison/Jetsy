import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.cartList.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems(this.props.cartId)
  }

  cartList(cartItems, products) {
    return (
      Object.values(cartItems).map((item) => (
        <CartItem key={item.updated_at} item={item} product={products[item.product_id]} />
      ))
    );
  }

  render() {
    if (!this.props.cartItems) return null

    return (
      <div>
        <h1>Cart</h1>
        {this.cartList(this.props.cartItems, this.props.cartProducts)}
      </div>
    )
  }

}

export default Cart;