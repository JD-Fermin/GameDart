import React from 'react';
import { Link } from 'react-router-dom';
import './game_dart_start.css';

class GameDartStart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    document.body.style.backgroundImage = "url('https://i.imgur.com/qSddrHK.jpeg')"
    return (
      <div className="game-dart-start-container">
        <div className="game-dart-info-container">
          <img src="https://i.imgur.com/kucktM9.png"/>

          <div className="game-dart-instructions">
            <div className="game-dart-text">
              <h2>Don't know what game to play next?</h2>
              <h2>GameDart it!</h2>
              <h2>Complete the following prompts, and we'll give you a new game to dive into!</h2>
              <h3>( Or reveal some obscure game that you may never play! )</h3>
            </div>
            
            <Link to='/gamedartit' id="start-button">Start!</Link>
          </div>
        </div>
      </div>
    )
  }
}


export default GameDartStart;