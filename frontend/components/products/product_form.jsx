import React from 'react';
import {Link} from 'react-router-dom';

class ProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.product;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "Update Your Product's Information"){
      this.props.action(this.state).then(
         () => this.props.history.push(`/products/${this.state.id}`));
    } else {
      debugger
      const productData = new FormData();
       productData.append('product[user_id]', this.props.currentUserId);
       productData.append('product[product_name]', this.state.product_name);
       productData.append('product[price]', this.state.price);
       productData.append('product[description]', this.state.description);
       if (this.state.photoFile) {
         productData.append('product[photo]', this.state.photoFile);
         this.props.action(productData).then(
           () => this.props.history.push(`/products`));
       }
     }
   }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

    handleDelete(e) {
      e.preventDefault();
      this.props.deleteProduct(this.props.match.params.productId).then(() => this.props.history.push("/products"));
    }

    deleteButton() {
      if (this.props.formType === "Update Your Product's Information") {
        return (
          <div className="delete-product-div">
            <input
              type="submit"
              value="Delete Product"
              className="delete-product"
              onClick={this.handleDelete} />
            <p>Clicking this will permanently delete your product!</p>
          </div>
      )} else {
        return null;
      }
    }

    handleFile(e) {
      const file =  e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({photoFile: file, photoUrl: fileReader.result});
      };
      if (file) {
        fileReader.readAsDataURL(file);
      }
    }

    photoButton() {
      if (this.props.formType === "Update Your Product's Information") return null;
      return  <input className="choose-file" type="file" onChange={this.handleFile} />
    }


  render () {
    const preview = this.state.photoUrl ? <img className="photo-preview" src={this.state.photoUrl} /> : null;
    const errors = () => (
      this.props.errors.map((error, i) => <li className="product-single-error" key={i}>{error}</li>)
    );

    return (
      <div className="form-div">
        <h1 className="form-header">{this.props.formType}</h1>
        <form onClick={this.props.removeErrors} className="create-edit-form" onSubmit={this.handleSubmit}>
            <div className="inputs-div">
              <div className="form-header-div">
                {this.deleteButton()}
                <h1 className="listing-details">Listing Details</h1>
                <p className="slogan">Tell the world all about how your item will make their travel experience better!</p>
              </div>
              <div className="description">
                <label className="product-label">Product Name:</label>
                <input className="product-input" type="text" placeholder=" Your Product's name goes here" value={this.state.product_name} onChange={this.update('product_name')} />
              </div>
              <div className="description">
                <label className="product-label">Price:</label>
                <input className="product-input" type="text" placeholder=" For example: 21.99" value={this.state.price} onChange={this.update('price')} />
              </div>
              <div className="text-area">
                <label className="product-label">Description:</label>
                <textarea className="product-input" placeholder=" All of your selling points for your item go here!" value={this.state.description} rows="10" cols="100" onChange={this.update('description')} />
              </div>
              <div className="product-inputs">
                <div className="cancel-div"><Link className="cancel" to="/products">Cancel</Link></div>
                <div className="submit-product-div"><input className="submit-product" type="submit" value="Submit Product"/></div>
              </div>
              <ul className="product-errors">{errors()}</ul>
            </div>
            <div className="photo-div">
              {this.photoButton()}
              <div className="photo-preview-div">{preview}</div>
            </div>
          </form>
        </div>
    );
  }
}

export default ProductForm;
