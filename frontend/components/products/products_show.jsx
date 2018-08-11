import React from 'react';
import {Link} from 'react-router-dom'


class ProductShow extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
    console.log(this.props)
  }

  editLink() {
    console.log(this.props)
    if (this.props.currentUserId === this.props.product.user_id){
      return <Link to={`/products/${this.props.product.id}/edit`}>Edit Product</Link>
    }
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
        {this.editLink()}
      </div>
    )
  }
}

export default ProductShow;
