import React from 'react';
import './profile.css'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.visitSite = this.visitSite.bind(this);
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

    visitSite(link) {
      return () => { 
        window.open(
          link, '_blank'
        )
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
      document.body.style.backgroundImage = "url('https://i.imgur.com/JXxsooA.jpg')";

      if (!this.props.user) {
        return null;
      }
      let editButton;
      
      if (this.props.user.id === this.props.currentId){
        editButton = <div id="edit-profile-button" onClick={this.props.openModal}>
          <div>Edit Info</div>
        </div>
      }
      return (
        <div className="profile-container">
          <div className="profile-box">
            <img src={this.props.user.profileImgUrl} alt="" />
            <h1>{this.props.user.name}</h1>
            <h2>{this.props.user.bio}</h2>
            {editButton}
          </div>

          {/* <div className="profile-plugs">
            <p id="giant-bomb-link">Powered by <a onClick={this.visitSite("https://giantbomb.com")}><span>Giant Bomb</span></a> API</p>
            <p id="repo-link">Visit the GameDart repo <a onClick={this.visitSite("https://github.com/JD-Fermin/GameDart")}><span>here</span></a></p>
          </div> */}
        </div>
      );
    }
      
}

export default withRouter(Profile);
