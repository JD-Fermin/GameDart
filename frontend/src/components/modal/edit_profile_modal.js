import React from "react";

class EditProfileModal extends React.Component{
    constructor(props) {
      super(props);
  
      this.state = {
        id: this.props.currentUser.id,
        email: this.props.currentUser.email,
        name: this.props.currentUser.name,
        bio: this.props.currentUser.bio,
        password: '',
        password2: '',
        errors: {}
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderErrors = this.renderErrors.bind(this);
      this.clearedErrors = false;
    }
  
    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      let user = {
        id: this.state.id,
        email: this.state.email,
        name: this.state.name,
        bio: this.state.bio,
        password: this.state.password,
        password2: this.state.password2
      };
  
      this.props.updateBio(user, this.props.history);
      this.props.closeModal();
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
      return ( 
        <div className="update-container">
          <div className="update-form">
            Update Profile
            <form onSubmit={this.handleSubmit}>
              <div className="login-form">
                {this.renderErrors()}
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder={this.state.email}
                    />
                <br/>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    placeholder={this.state.name}
                    />
                <br/>
                <input type="text"
                    value={this.state.bio}
                    onChange={this.update('bio')}
                    placeholder={this.state.bio}
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
      )
    }
  }

export default EditProfileModal;