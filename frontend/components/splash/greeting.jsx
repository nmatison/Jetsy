import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CategoryContainer from './category_container';
import PersonalGreeting from './personal_greeting';
import SessionLinks from './session_links';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.state = {query_string: ""};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchProducts(this.state).then(() => this.props.history.push({
      pathname: '/search',
      search: `${this.state.query_string}`,
    }));
  }

  update() {
    return (e) => {
      this.setState({["query_string"]: e.target.value})
    }
  }

render () {
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
          {this.props.currentUser ? <PersonalGreeting 
            currentUser={this.props.currentUser} 
            logout={this.props.logout} /> : <SessionLinks openModal={this.props.openModal} /> 
          };
        </nav>
          <CategoryContainer />
      </div>;
  }
}
export default withRouter(Greeting);
