import React from "react";
import { withRouter } from 'react-router';
import './edit_modal.css'

class EditProfileModal extends React.Component{
    constructor(props) {
      super(props);
  
      this.state = {
        id: this.props.user.id,
        email: this.props.user.email,
        name: this.props.user.name,
        bio: this.props.user.bio,
        profileImgUrl: this.props.user.profileImgUrl,
        password: '',
        password2: '',
        errors: {}
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {  
      this.setState({errors: nextProps.errors})
    }
    
    componentDidMount(){
      this.props.fetchUser(this.props.user.id);
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
        profileImgUrl: this.state.profileImgUrl,
        password: this.state.password,
        password2: this.state.password2
      };
      
      this.props.updateBio(user)
      .then(() => {
        if (Object.keys(this.state.errors).length === 0) {
          this.props.closeModal();
        }
      })
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
          <div className="login-box">
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
                <div id="avi-box">
                  <input type="radio" className='image-radio' name='avi' id="avi-akali" checked={this.state.profileImgUrl === "https://i.imgur.com/gzZ9eH7.jpg"} value="https://i.imgur.com/gzZ9eH7.jpg" onChange={this.update('profileImgUrl')}/><label for="avi-akali"></label> 
                  <input type="radio" className='image-radio' name='avi' id="avi-akuma" checked={this.state.profileImgUrl === "https://i.imgur.com/beL8b4v.jpg"} value="https://i.imgur.com/beL8b4v.jpg" onChange={this.update('profileImgUrl')}/><label for="avi-akuma"></label> 
                  <input type="radio" className='image-radio' name='avi' id="avi-dmc" checked={this.state.profileImgUrl === "https://i.imgur.com/xkeGEJT.png"} value="https://i.imgur.com/xkeGEJT.png" onChange={this.update('profileImgUrl')}/><label for="avi-dmc"></label> 
                  <input type="radio" className='image-radio' name='avi' id="avi-karin" checked={this.state.profileImgUrl === "https://i.imgur.com/tIO5OeK.jpg"} value="https://i.imgur.com/tIO5OeK.jpg" onChange={this.update('profileImgUrl')}/><label for="avi-karin"></label> 
                  <input type="radio" className='image-radio' name='avi' id="avi-keanu" checked={this.state.profileImgUrl === "https://i.imgur.com/DaAEwvQ.jpg"} value="https://i.imgur.com/DaAEwvQ.jpg" onChange={this.update('profileImgUrl')}/><label for="avi-keanu"></label> 
                  <input type="radio" className='image-radio' name='avi' id="avi-lara" checked={this.state.profileImgUrl === "https://i.imgur.com/ktarjMI.jpg"} value="https://i.imgur.com/ktarjMI.jpg" onChange={this.update('profileImgUrl')}/><label for="avi-lara"></label> 
                  <input type="radio" className='image-radio' name='avi'  id="avi-miku" checked={this.state.profileImgUrl === "https://i.imgur.com/TgO2Eqb.jpg"} value="https://i.imgur.com/TgO2Eqb.jpg" onChange={this.update('profileImgUrl')}/><label for="avi-miku"></label> 
                  <input type="radio" className='image-radio' name='avi' id="avi-rindou" checked={this.state.profileImgUrl === "https://i.imgur.com/Ta37y5u.png"} value="https://i.imgur.com/Ta37y5u.png" onChange={this.update('profileImgUrl')}/><label for="avi-rindou"></label> 
                </div>
                <input type="submit" value="Submit" id="submit-button"/>
              </div>
            </form>
          </div>
      )
    }
  }

export default withRouter(EditProfileModal);