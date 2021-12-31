import React from "react";
import "./backlog.css";
import Tabs from "./backlog_tabs";

class BackLog extends React.Component {
  constructor(props) {
    super(props)

    this.handlePlayed = this.handlePlayed.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.viewGame = this.viewGame.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    // this.handleSwitch = this.handleSwitch.bind(this);
  }

  componentDidMount() {
    this.props.fetch(this.props.currentId);
  }

  scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  // handleSwitch() {

  // }

  viewGame(gameId) {
    this.props.history.push(`/games/${gameId}`)
  }

  handlePlayed(game) {
    const payload = {
      gameId: game.id,
      id: this.props.currentId,
      name: game.name,
      image: game.image
    };

    this.props.setPlayed(payload);
    this.props.delete(payload);
  }

  handleRemove(gameId) {
    const payload = {
      id: this.props.currentId,
      gameId: gameId
    }

    console.log(gameId)
    this.props.delete(payload)
  }

  handleBack(game) {
    const payload = {
      gameId: game.id,
      id: this.props.currentId,
      name: game.name,
      image: game.image
    };

    // if (this.props.game.similar_games) {
    //   for (let i = 0; i < this.props.game.similar_games.length; i++) {
    //     payload.similar_games.push(`3030-${this.props.game.similar_games[i].id}`)
    //   }
    // }   
    this.props.setBackLog(payload);
    this.props.deletePlayed(payload);
  }

  render() {
    if (!this.props.user) {
      return null;
    }

    document.body.style.backgroundImage = "url('https://i.imgur.com/JctqNaX.jpg')";

    return (
      <div className="selected-games-container">

        {!this.props.user.backLogGames.length && !this.props.user.playedGames.length ? 
          <div className="played-games-container">
            <h1>GameDart some games!</h1>
            <img id="no-games" src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" />
          </div> : null}
        
        <Tabs>
          {this.props.user.backLogGames.length === 0 ? null :
            <div label="Backlog" className="backlog-container">
          
              {this.props.user.backLogGames.map((game, i) => {

                return (
                  <div key={i} className="backlogGame-item">
                    <div className="backlogGame-options">
                      <div className="backlogGame-title">{ game.name }</div>
                      <div className="backlogGame-buttons">
                        <button className="add-to-played" onClick={() => this.handlePlayed(game)}>Add to Games Played</button>
                        <button className="remove-game" onClick={() => this.handleRemove(game.id)}>Remove Game</button>
                      </div>
                      
                      <div className="backlogGame-buttons">
                        <button className="view-game-button" onClick={() => this.viewGame(game.id)}>View Game Page</button>
                      </div>
                    </div>             
                    <img src={game.image} />
                  </div>
                )
              })}
            </div>
          }
          {this.props.user.playedGames.length === 0 ? null :
            <div label="Played Games" className="played-games-container">   

              {this.props.user.playedGames.map((game, i) => {

                return (
                  <div key={i} className="backlogGame-item">
                    <div className="backlogGame-options">
                      <div className="backlogGame-title">{ game.name }</div>
                      <div className="backlogGame-buttons">
                        <button className="remove-from-played" onClick={() => this.handleBack(game)}>Remove from Games Played</button>
                        <button className="view-game-button" onClick={() => this.viewGame(game.id)}>View Game Page</button>
                      </div>
                    </div>
                    <img src={game.image} />
                  </div>
                )
              })}
            </div>
          }
        </Tabs>
      </div>
    ) 
  }
}


export default BackLog;