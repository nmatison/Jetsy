import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.cartList = this.cartList.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
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

  calcTotal(cartItems, products) {
    let counter = 0

    Object.values(cartItems).forEach((item) => {
      counter += (item.quantity * products[item.product_id].price)
    })
    return counter.toLocaleString();
  }

  render() {
    if (!this.props.cartItems) return null

    return <div>
        <h1>Cart</h1>
        <div className="cart-item-list">
          {this.cartList(this.props.cartItems, this.props.cartProducts)}
        </div>
        <div className="total">
          <h1>
            {`$${this.calcTotal(this.props.cartItems, this.props.cartProducts)}`}
          </h1>
        </div>
      </div>;
  }

}

export default Cart;