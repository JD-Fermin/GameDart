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
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openDropdown(type) {
    // console.log('open dropdown')
    switch(type){
      case 'showSettings':
        this.setState({showSettings: true})
        break;

    }
  }

  closeDropdown() {
    // console.log('close dropdown')
    this.setState({showSettings: false})
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="NavBar">
            <div id='user-menu' onMouseEnter={()=> this.openDropdown('showSettings')} onMouseLeave={this.closeDropdown}>Menu
            {
              this.state.showSettings ? (
                <div className='dropdown-menu'>
                  <Link to='/profile'>Profile</Link>
                  <Link to='/gamedartit'>Dart It!</Link>
                  <Link to='/backlog'>Games You Will Never Play</Link>
                  <a onClick={this.logoutUser}>Logout</a>
                </div>
              ) : ( null )
            }
            </div>
          </div>
        );
      } else {
        return (
          <div className="NavBar">
            <div id='user-menu' onMouseEnter={()=> this.openDropdown('showSettings')} onMouseLeave={this.closeDropdown}>Open GameDart
            {
              this.state.showSettings ? (
                <div className='dropdown-menu'>
                  <Link to={'/signup'}>Signup</Link>
                  <Link to={'/login'}>Login</Link>
                </div>
              ) : ( null )
            }
            </div>
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