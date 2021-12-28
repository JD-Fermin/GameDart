import React from 'react';
import './main_page.css'

class MainPage extends React.Component {

  render() {
    document.body.style.backgroundImage = '';
    return (
      <div className="splash-component">
        <div className="splash-title">
          <div className="splash-container">
            <img id="main-logo"src="https://i.imgur.com/kucktM9.png" alt=""/>
            <h3>Unlimited Games, Unlimited Fun</h3>
          </div>
        </div>

        <div className="splash-desc">
          <div>
            <h3>Find a brand new video game to experience</h3>
            <div>
              <p>There are countless video games out there, and figuring out what to play next can be very difficult.</p>
              Take out the guess work by using our algorithm to find the next game for you!
            </div>
          </div>
          <div>
            <h3>Create and organize your playlist</h3>
            <div>
              With our convenient platform, you can keep track of all the games you've played and plan to play.
            </div>
          </div>
          <div>
            <h3>Connect with other gamers</h3>
            <div>
              Get a look at other gamer's playlists. See their games and get some suggestions based on their interests.
            </div>
          </div>
        </div>
        {/* <footer >
          Made by Team Culture. Powered by Giant Bomb.
        </footer> */}
      </div>
    );
  }
}

export default MainPage;