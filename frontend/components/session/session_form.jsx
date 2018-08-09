import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      email_address: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
    console.log(user)
  }

  update(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {username: "Demo User", password: "demodemo"};
    this.props.login(user).then(this.props.closeModal);
  }

  render() {
    const email = () => {
      if (this.props.formType === "Sign Up") {
        return (<label className="session-label">Email Address:
          <input className="sign-in-input" type="text" onChange={this.update('email_address')}/>
        </label>)
      } else {
        return null;
      }
    }

    return (
      <div>
        <h1 className="formtype">{`${this.props.formType} to continue`}</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
            <label className="session-label">Username:
              <input className="sign-in-input" type="text" onChange={this.update('username')}></input>
            </label>
              {email()}
            <label className="session-label">Password:
              <input className="sign-in-input" type="password" onChange={this.update('password')}></input>
            </label>
            <input className="session-submit" type='submit' value={this.props.formType}/>
            <div className="line-or">
               <hr className="before-or-line" />
               <span className="or-span">OR</span>
               <hr className="after-or-line" />
             </div>
            <input className="demo-submit" type="submit" value="Demo Login" onClick={this.demoLogin}/>
            {this.props.errors.map((error, i) => <p className="login-errors" key={i}>{error}</p>)}
        </form>
      </div>
    )
  }
}


export default withRouter(SessionForm);
