import React from 'react';
import './profile.css'
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        console.log(this.props.currentUser.bio)
        console.log(this.props.currentUser.profileImgUrl)
    }

    render() {
      return (
        <div className="profile-container">
          <div className="profile-box">
            <img src={this.props.currentUser.profileImgUrl} alt="" />
            <div>{this.props.currentUser.name}</div>
            <div>{this.props.currentUser.bio}</div>
            <div id="edit-profile-button">
              <Link to="/profile/edit">Edit Info</Link>
            </div>
          </div>
        </div>
      );
    }
      
}

export default Profile;
