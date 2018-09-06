import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCartItems(this.props.cartId)
  }

  cartList(cartItems, products) {
    return(
      cartItems.map((item) => {
        <CartItem key={item.updated_at} item={item} product={products[item.product_id]} />
      })
    )
  }

  render() {
    console.log(this.props.cartId)
    if (!this.props.cartItems) return null 
    return (
      <div>
        {this.cartList(this.props.cartItems, this.props.products)}
      </div>
    )
  }

}

export default Cart;