import React from 'react';


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
            <div>
              <h2>{this.props.currentUser.name}</h2>
              <p>Welcome!</p>
              
            </div>
          );
    }
      
}

export default Profile;
