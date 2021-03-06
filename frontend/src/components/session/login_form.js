import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/profile');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  demoLogin() {
    let user = {
      email: "demo@user.com",
      password: "password"
    };
    this.props.login(user); 
  }
  renderErrors() {
    document.body.style.backgroundImage = "url('https://i.imgur.com/JXxsooA.jpg')";

    return(
      <ul id="errors-section">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-box">
        <img src="https://i.imgur.com/kucktM9.png"/>
          <form onSubmit={this.handleSubmit}>
            <div className="login-form">
              {this.renderErrors()}
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  />
              <br/>
              <input type="submit" value="Log In" id="submit-button"/>
            </div>
          </form>
          <button id="demo-login-button" onClick={this.demoLogin}>Demo User</button>
          <div className="redirect-info">
            <span>New to GameDart? </span>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);