import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettings: false,
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    // this.openDropdown = this.openDropdown.bind(this);
  }

  // openDropdown(type) {
  //   switch(type){
  //     case 'showSettings':
  //       this.setState({showSettings: true})
  //       break;

  //   }
  // }

  // closeDropdown() {
  //   console.log("hit")
  //   this.setState({showSettings: false})
  // }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="NavBar">
            {/* <div id='user-menu' onClick={()=> this.openDropdown('showSettings')} onBlur={this.closeDropdown}>Test</div>
            {
              this.state.showSettings ? (
                <div className='dropdown-menu'> */}
                  <Link to={`/profile`}>Profile</Link>
                  <a onClick={this.logoutUser}>Logout</a>
                {/* </div>
              ) : ( null )
            } */}
          </div>
        );
      } else {
        return (
          <div className="NavBar">
            <Link to={'/signup'}>Signup</Link>
            <Link to={'/login'}>Login</Link>
          </div>
        );
      }
  }

  render() {
    return this.getLinks();
      // return (
      //   <div>
      //       { this.getLinks() }
      //   </div>
      // );
  }
}

export default NavBar;