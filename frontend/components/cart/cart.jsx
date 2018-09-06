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
    console.log("sup")
    return (
      Object.values(cartItems).map((item) => {
        <CartItem key={item.updated_at} item={item} product={products[item.product_id]} />
      })
    )
  }

  render() {
    if (!this.props.cartItems) return null 
    return (
      <div>
        <h1>Cart</h1>
        <ul>{this.cartList(this.props.cartItems, this.props.cartProducts)} </ul>
      </div>
    )
  }

}

export default Cart;