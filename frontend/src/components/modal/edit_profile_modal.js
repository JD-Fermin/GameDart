import React from "react";
import { withRouter } from 'react-router';
import './edit_modal.css'

class EditProfileModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.user.id,
      email: this.props.user.email,
      name: this.props.user.name,
      bio: this.props.user.bio,
      profileImgUrl: this.props.user.profileImgUrl,
      password: this.props.user.id === '61caefc9f949fd0016cbd4f8' ? "password" : '',
      password2: this.props.user.id === '61caefc9f949fd0016cbd4f8' ? "password" : '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors })
  }

  componentDidMount() {
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
    return (
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
      <div className="edit-modal">
        <p id="edit-header">Update Profile</p>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            {this.renderErrors()}
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder={this.state.email}
            />
            <br />
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder={this.state.name}
            />
            <br />
            <input type="text"
              value={this.state.bio}
              onChange={this.update('bio')}
              placeholder={this.state.bio}
            />
            <br />
            {this.props.user.id !== '61caefc9f949fd0016cbd4f8' ?
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              /> :
              null}

            <br />
            {this.props.user.id !== '61caefc9f949fd0016cbd4f8' ?
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Password"
              /> :
              null}
            <br />
            <div id="avi-box">
              <input type="radio" className='image-radio' name='avi' id="avi-akali" checked={this.state.profileImgUrl === "https://i.imgur.com/gzZ9eH7.jpg"} value="https://i.imgur.com/gzZ9eH7.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-akali"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-akuma" checked={this.state.profileImgUrl === "https://i.imgur.com/beL8b4v.jpg"} value="https://i.imgur.com/beL8b4v.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-akuma"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-dmc" checked={this.state.profileImgUrl === "https://i.imgur.com/xkeGEJT.png"} value="https://i.imgur.com/xkeGEJT.png" onChange={this.update('profileImgUrl')} /><label for="avi-dmc"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-lara" checked={this.state.profileImgUrl === "https://i.imgur.com/ktarjMI.jpg"} value="https://i.imgur.com/ktarjMI.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-lara"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-keanu" checked={this.state.profileImgUrl === "https://i.imgur.com/DaAEwvQ.jpg"} value="https://i.imgur.com/DaAEwvQ.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-keanu"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-karin" checked={this.state.profileImgUrl === "https://i.imgur.com/tIO5OeK.jpg"} value="https://i.imgur.com/tIO5OeK.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-karin"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-kratos" checked={this.state.profileImgUrl === "https://i.imgur.com/aEeE4Jb.jpg"} value="https://i.imgur.com/aEeE4Jb.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-kratos"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-sora" checked={this.state.profileImgUrl === "https://i.imgur.com/q9r7Thq.png"} value="https://i.imgur.com/q9r7Thq.png" onChange={this.update('profileImgUrl')} /><label for="avi-sora"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-miku" checked={this.state.profileImgUrl === "https://i.imgur.com/TgO2Eqb.jpg"} value="https://i.imgur.com/TgO2Eqb.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-miku"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-spidey" checked={this.state.profileImgUrl === "https://i.imgur.com/kNuWjTs.jpg"} value="https://i.imgur.com/kNuWjTs.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-spidey"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-default" checked={this.state.profileImgUrl === "https://ubisoft-avatars.akamaized.net/46564bd6-ef0b-4b05-97ec-68d8473167c6/default_256_256.png"} value="https://ubisoft-avatars.akamaized.net/46564bd6-ef0b-4b05-97ec-68d8473167c6/default_256_256.png" onChange={this.update('profileImgUrl')} /><label for="avi-default"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-chunli" checked={this.state.profileImgUrl === "https://i.imgur.com/YBluko7.jpg"} value="https://i.imgur.com/YBluko7.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-chunli"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-cj" checked={this.state.profileImgUrl === "https://i.imgur.com/fJhgSro.jpg"} value="https://i.imgur.com/fJhgSro.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-cj"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-peach" checked={this.state.profileImgUrl === "https://i.imgur.com/fPM0ab5.png"} value="https://i.imgur.com/fPM0ab5.png" onChange={this.update('profileImgUrl')} /><label for="avi-peach"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-samus" checked={this.state.profileImgUrl === "https://i.imgur.com/ofMRQhY.png"} value="https://i.imgur.com/ofMRQhY.png" onChange={this.update('profileImgUrl')} /><label for="avi-samus"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-shyguy" checked={this.state.profileImgUrl === "https://i.imgur.com/7nNsCKi.jpg"} value="https://i.imgur.com/7nNsCKi.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-shyguy"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-chief" checked={this.state.profileImgUrl === "https://i.imgur.com/5vM7wn5.jpg"} value="https://i.imgur.com/5vM7wn5.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-chief"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-tifa" checked={this.state.profileImgUrl === "https://i.imgur.com/iEs6nvG.jpg"} value="https://i.imgur.com/iEs6nvG.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-tifa"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-ezio" checked={this.state.profileImgUrl === "https://i.imgur.com/lT8SIAO.jpg"} value="https://i.imgur.com/lT8SIAO.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-ezio"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-fortnite" checked={this.state.profileImgUrl === "https://i.imgur.com/oPG6WtS.jpg"} value="https://i.imgur.com/oPG6WtS.jpg" onChange={this.update('profileImgUrl')} /><label for="avi-fortnite"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-rindou" checked={this.state.profileImgUrl === "https://i.imgur.com/Ta37y5u.png"} value="https://i.imgur.com/Ta37y5u.png" onChange={this.update('profileImgUrl')} /><label for="avi-rindou"></label>
            </div>
            <input type="submit" value="Submit" id="submit-button" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(EditProfileModal);