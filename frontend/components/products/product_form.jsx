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
    this.props.action(this.state)
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          // <h1>{this.props.formType}</h1>
          <label>Product Name
            <input type="text" value={this.state.product_name} onChange={this.update('product_name')} />
            <textarea value={this.state.description} onChange={this.update('description')} />
            <input type="submit"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default ProductForm;
