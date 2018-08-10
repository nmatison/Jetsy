import React from 'react';


class ProductShow extends React.Component {

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
    console.log(this.props)
  }

  render() {
    if (!this.props.product) return null;
    const product = this.props.product;
    const user = this.props.user
    return(
      <div>
        <h1>{product.product_name}</h1>
        <h1>{product.price}</h1>
        <h1>{product.description}</h1>
        <h1>{user.username}</h1>
      </div>
    )
  }
}

export default ProductShow;
