import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navbar.css'
import BacklogContainer from '../backlog/backlog_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettings: false,
      showSidenav: false,
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  
  toggleSideNav() {
    document.getElementById("sandwich-icon").classList.toggle("change");
    if (!this.state.showSidenav) {
      this.setState({showSidenav: true});
      document.getElementById("side-nav").style.width = "350px";
    } else {
      this.setState({showSidenav: false});
      document.getElementById("side-nav").style.width = "0";
    }
  }
  
  openDropdown(type) {
    switch(type){
      case 'showSettings':
        this.setState({showSettings: true})
        break;
      default:
        return
    }
  }

  closeDropdown(e) {
    e.stopPropagation()
    this.setState({showSettings: false})
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="NavBar">
            <div id="sandwich-icon" onClick={this.toggleSideNav}>
              <div id="bar1"></div>
              <div id="bar2"></div>
              <div id="bar3"></div>
            </div>
            <div id="side-nav">
              <BacklogContainer toggleSideNav={this.toggleSideNav} />
            </div>
            <div id="nav-logo" >
              <Link id="nav-logo-link"to='/gamedartstart'><img src="https://i.imgur.com/kucktM9.png"/></Link>
            </div>
            <div id='user-menu' onMouseEnter={() => this.openDropdown('showSettings')}>Menu
            {
              this.state.showSettings ? (
                  <div className='dropdown-menu' onMouseLeave={this.closeDropdown}>
                  <Link to='/profile'>Profile</Link>
                  <Link to='/gamedartstart'>GameDart It!</Link>
                  <Link to='/developers'>Developers</Link>
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
            <div id="splash-nav-logo" >
              <Link to='/'><img src="https://i.imgur.com/kucktM9.png"/></Link>
            </div>
            <div id='user-menu' onMouseEnter={()=> this.openDropdown('showSettings')} >GameDart
            {
              this.state.showSettings ? (
                  <div className='dropdown-menu' onMouseLeave={this.closeDropdown}>
                  <Link to={'/signup'}>Signup</Link>
                  <Link to={'/login'}>Login</Link>
                  <Link to='/developers'>Developers</Link>
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

export default withRouter(NavBar);