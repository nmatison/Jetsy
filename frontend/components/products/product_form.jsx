import React from 'react';

class ProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.product
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.user_id = this.props.currentUserId
    this.props.action(this.state).then(() => this.props.history.push("/products"))
  }


  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render () {
    return (
      <div className="product-form">
        <form className="create-edit-form" onSubmit={this.handleSubmit}>
          <h1 className="form-header">{this.props.formType}</h1>
          <div className="inputs-div">
            <h1 className="listing-details">Listing Details</h1>
            <p className="slogan">Tell the world all about how your item will make their travel experience better!</p>
            <div className="description">
              <label className="product-label">Product Name:</label>
              <input className="product-input" type="text" value={this.state.product_name} onChange={this.update('product_name')} />
            </div>
            <div className="description">
              <label className="product-label">Price:</label>
              <input className="product-input" type="text" placeholder="For example: 21.99" value={this.state.price} onChange={this.update('price')} />
            </div>
            <div className="description">
              <label className="product-label">Description:</label>
              <textarea className="product-input" placeholder="All of your selling points for your item go here!" value={this.state.description} rows="10" cols="100" onChange={this.update('description')} />
            </div>
            <input type="submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
