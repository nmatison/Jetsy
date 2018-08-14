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
      return <Link className="edit-link" to={`/products/${this.props.product.id}/edit`}>Edit Product</Link>
    }
  }

  quantitySelector() {
    let options = []
    for (var i = 1; i < 101; i++) {
      options.push(<option value={`${i}`}>{`${i}`}</option>)
    }
    return (
      <select name="Quantity" className="quantity">
        {options}
      </select>
    )
  }

  render() {
    if (!this.props.product) return null;
    const product = this.props.product;
    const user = this.props.users[this.props.product.user_id]
    return(
      <div className="show-main">
        <div className="product-show-div">
          <div className="image-description">
            <img src={product.photoUrl} className="show-image-div" />
            <h1 className="product-description">Description:
              <br></br>
              {product.description}
            </h1>
            {this.editLink()}
          </div>
          <div className="info-submit">
            <div className="product-information">
              <div className="title-price">
                <h1 className="product-title">{product.product_name}</h1>
                <h1 className="product-price">Price: ${product.price}/each</h1>
              </div>
              <div className="user-userpic">
                <div className="sold-text">
                  <h1 className="sold-by">Sold By:</h1>
                  <h1 className="seller-name">{user.username}</h1>
                </div>
                <div className="seller-pic"></div>
              </div>
            </div>
            <div className="quantity-cart">
              <label>Quantity:
                {this.quantitySelector()}
              </label>
            </div>
            <input type="submit" className="add-cart" value="Add To Cart" />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductShow;
