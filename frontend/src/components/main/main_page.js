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
              There are countless video games out there, and figuring out what to play next can be very difficult.
              Take out the guess work by using our algorithm to find the next game for you!
            </div>
          </div>
          <div>
            <h3>Create and organize your playlist</h3>
            <div>
              With our convenient platform, you can keep track of the games you've played and plan to play all in one place.
            </div>
          </div>
          <div>
            <h3>Rate and review games</h3>
            <div>
              Read what other players think of a game. See if this game is for you, and rate it yourself to help other's game-playing decisions. 
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