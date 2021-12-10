import React from 'react';
import './game_dart_start.css';

class GameDartStart extends React.Component {
  constructor(props) {
    super(props)
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart(e) {
    this.props.history.push('/gamedartit')
  }

  render() {
    document.body.style.backgroundImage = "url('https://i.imgur.com/qSddrHK.jpeg')"
    return (
      <div className="game-dart-start-container">
        <div className="game-dart-info-container">
          <img src="https://i.imgur.com/kucktM9.png"/>
          <div className="game-dart-instructions">
            <h2>Don't know what game to play next? GameDart it!</h2>
            <h2>Complete the following prompts, and we'll give you a new game to dive into!</h2>
            <h3>Or reveal some obscure game that you may never play!</h3>
            <input type="submit" value="Start" onClick={this.handleStart} id="submit-button"/>
          </div>
        </div>
      </div>
    )
  }
}


export default GameDartStart;