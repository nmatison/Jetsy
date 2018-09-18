import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.cartList = this.cartList.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
    this.totalItems = this.totalItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems(this.props.cartId)
  }

  cartList(cartItems, products, deleteCartItem) {
    return (
      Object.values(cartItems).map((item) => (
        <CartItem key={item.updated_at} item={item} product={products[item.product_id]} deleteCartItem={deleteCartItem} />
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

  totalItems(cartItems) {
    let counter = 0 
    Object.values(cartItems).forEach(item => {
      counter += item.quantity
    });
    return counter
  }

  render() {
    if (!this.props.cartItems) return null

    return <div className="cart-main">
        <h1>Shopping Cart</h1>
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-item-list">
              {this.cartList(
                this.props.cartItems,
                this.props.cartProducts,
                this.props.deleteCartItem
              )}
            </div>
          </div>
          <div className="cart-total">
            <div className="cart-total-container">
              <div className="cart-total-information">
                <ul className="cart-total-left">
                  <li>{`Subtotal:`}</li>
                  <li className="total-cart-items">{`Total Items:`}</li>
                  <li className="tax">{`Tax:`}</li>
                  <li className="shipping">{`Shipping:`}</li>
                </ul>
                <ul className="cart-total-right">
                  <li>{`$${this.calcTotal(this.props.cartItems, this.props.cartProducts)}`}</li>
                  <li className="total-cart-items">{`${this.totalItems(this.props.cartItems)}`}</li>
                  <li className="tax">{`--`}</li>
                  <li className="shipping">{`free`}</li>
                </ul>
              </div>
              <div className="estimated-total">
                <li>{`Total:`}</li>
                <li>{`$${this.calcTotal(this.props.cartItems, this.props.cartProducts)}`}</li>
              </div>
              <div className="checkout-button">
                <button onClick={(e) => window.alert("I hope you have enjoyed my site! Feel free to check out my github and linked-in links in the footer!")}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Cart;