import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CategoryContainer from './category_container';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
    this.state = {query_string: ""}
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchProducts(this.state).then(() => this.props.history.push({
  pathname: '/search',
  search: `${this.state.query_string}`,
}))
  }

  update() {
    return (e) => {
      this.setState({["query_string"]: e.target.value})
    }
  }

render () {
  const cart = <img className="cart" src="https://png.icons8.com/ios-glyphs/50/000000/shopping-cart.png" />
  const personIcon = <img className="person-icon" src="https://png.icons8.com/cotton/50/000000/gender-neutral-user.png" />

  const sessionLinks = () => (
    <nav className="login-signup">
        <button className="signup-button" onClick={() => this.props.openModal('regtocontinue')}>Sell on Jetsy</button>
      <button className="signup-button" onClick={() => this.props.openModal('signup')}>Register</button>
      <button className="login-button" onClick={() => this.props.openModal('login')}>Sign In</button>
        <Link to="/cart" className="cart-div">
          {cart}
          <span className="cart-text">Cart</span>
        </Link>
    </nav>
  );

  const personalGreeting = () => (
    <span className="your-page">
      <Link to='/products/new' className="sell-link">Sell a travel item</Link>
      <Link className="you-link" to={`/users/${this.props.currentUser.id}`}>
        {personIcon}
        <span className="you-text">You</span>
      </Link>
      <input 
      className="logout-input" 
      type="submit" 
      value="Log Out" 
        onClick={this.props.logout} />
        <Link to="/cart" className="cart-div">
          {cart}
          <span className="cart-text">Cart</span>
        </Link>
    </span>
  )

    return <div className="nav-bar">
        <nav className="nav-bar-links">
          <form className="title-and-search" onSubmit={this.handleSubmit}>
            <Link to="/" className="title">
              Jetsy
            </Link>
            <span className="search-span">
              <input onChange={this.update()} className="search-bar" type="text" placeholder="Search for travel items" />
            </span>
            <input type="submit" className="search-submit" value="Search" />
          </form>
          {this.props.currentUser ? personalGreeting() : sessionLinks()}
        </nav>
          <CategoryContainer />
      </div>;
  }
}
export default withRouter(Greeting);
