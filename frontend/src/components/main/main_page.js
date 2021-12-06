import React from 'react';
import { Link } from 'react-router-dom'
import './main_page.css'

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-component">
        <div className="splash-title">
          <div className="splash-container">
            <h1>GameDart</h1>
            <h3>Manage your neverending backlog of video games.</h3>
          </div>
        </div>

        <div className="splash-desc">
          <h3>Discover new games to potentially never play.</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui ut ornare. Erat velit scelerisque in dictum non consectetur. Dui ut ornare lectus sit amet est. Purus in massa tempor nec. Vitae suscipit tellus mauris a. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Mattis nunc sed blandit libero. Et malesuada fames ac turpis egestas integer. Cursus turpis massa tincidunt dui ut ornare lectus. Vitae et leo duis ut diam quam nulla. Eget dolor morbi non arcu risus quis varius quam quisque. Platea dictumst quisque sagittis purus sit amet. Rutrum quisque non tellus orci ac auctor. A scelerisque purus semper eget duis.
          </div>
        </div>

        <footer>
          Made by Team Culture
        </footer>
      </div>
    );
  }
}

export default MainPage;