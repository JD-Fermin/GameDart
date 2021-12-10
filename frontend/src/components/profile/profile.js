import React from 'react';
import './profile.css'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Profile extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      if (this.props.match.params.id) {
        this.props.fetchUser(this.props.match.params.id)
        .then(() => {
          this.setState({
            profileImgUrl: this.props.user.profileImgUrl,
            name: this.props.user.name,
            bio: this.props.user.bio
          })
        })
      } else {
        this.props.fetchUser(this.props.currentId)
        .then(() => {
          this.setState({
            profileImgUrl: this.props.user.profileImgUrl,
            name: this.props.user.name,
            bio: this.props.user.bio
          })
        })
      }
    }

    // componentDidUpdate() {
    //   if (this.props.match.params.id) {
    //     this.props.fetchUser(this.props.match.params.id);
    //   } else {
    //     this.props.fetchUser(this.props.currentId);
    //   }
    // }
    
    // componentWillMount() {
    //   if (this.props.match.params.id) {
    //     this.props.fetchUser(this.props.match.params.id);
    //   } else {
    //     this.props.fetchUser(this.props.currentId);
    //   }
    // }

    render() {
      if (!this.props.user) {
        return null;
      }
      let editButton;
      // console.log(this.props.user.id)
      // console.log(this.props.currentId)
      if (this.props.user.id === this.props.currentId){
        editButton = <div id="edit-profile-button">
          <div onClick={this.props.openModal}>Edit Info</div>
        </div>
      }
      return (
        <div>
          <div className="profile-container">
            <div className="">
              <div className="profile-box">
                <img src={this.props.user.profileImgUrl} alt="" />
                <div>{this.props.user.name}</div>
                <div>{this.props.user.bio}</div>
                {editButton}
              </div>
            </div>
          </div>
        </div>
      );
    }
      
}

export default withRouter(Profile);
