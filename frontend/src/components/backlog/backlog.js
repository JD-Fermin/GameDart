import React from "react";
import "./backlog.css"

class BackLog extends React.Component {
  constructor(props) {
    super(props)

    this.handlePlayed = this.handlePlayed.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    this.props.fetch(this.props.currentId);
  }

  handlePlayed(game) {
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

    return (
      <div className="selected-games-container">
        {this.props.user.backLogGames.length === 0 && this.props.user.playedGames.length === 0 ? <div><h2>There are no games yet!</h2><img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" /></div> : null}
        <h1>My Playlist</h1>          
        {this.props.user.backLogGames.length === 0 ? null :
          <div className="backlog-container">
         
            {this.props.user.backLogGames.map((game, i) => {

              return (
                <div key={i} className="backlogGame-item">
                  <div className="backlogGame-options">
                  <div className="backlogGame-title">{ game.name }</div>
                   <div className="backlogGame-buttons">
                    <button onClick={() => this.handlePlayed(game)}>Add to Games Played</button>
                    <button onClick={() => this.handleRemove(game.id)}>Remove Game</button>
                  </div>
                 </div>             
                 <img src={game.image} />
                </div>
              )
            })}
          </div>
        }


        {this.props.user.playedGames.length === 0 ? null :
          <div className="played-games-container">
            {this.props.user.playedGames.map((game, i) => {

              return (
                <div key={i} className="backlogGame-item">
                  <img src={game.image} />
                  {game.name}
                  <div>
                    <button onClick={() => this.handleBack(game)}>Remove from Games Played</button>
                  </div>
                </div>
              )
            })}
          </div>
        }
      <div id="thats-exactly-right">thats exactly right</div>
      </div>
    ) 
  }
}


export default BackLog;