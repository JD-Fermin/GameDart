import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
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
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
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

    document.body.style.backgroundImage = "url('https://i.imgur.com/JXxsooA.jpg')";
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
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  placeholder="Name"
                  />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  />
              <br/>
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                  />
              <br/>
              <input type="submit" value="Submit" id="submit-button"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);