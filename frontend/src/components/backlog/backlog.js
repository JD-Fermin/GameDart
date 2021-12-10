import React from "react";
import "./backlog.css"

class BackLog extends React.Component {
  constructor(props) {
    super(props)

    this.handlePlayed = this.handlePlayed.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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


  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div className="selected-games-container">
        <div className="backlog-container">
          {this.props.user.backLogGames.length === 0 ? <div><h2>There are no games yet!</h2><img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" /></div> :

            this.props.user.backLogGames.map((game, i) => {

              return (
                <div key={i} className="backlogGame-item">
                  <img src={game.image} />
                  {game.name}
                  <div>
                    <button onClick={() => this.handlePlayed(game)}>Add to Games Played</button>
                    <button onClick={() => this.handleRemove(game.id)}>Remove Game</button>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="played-games-container">
          {this.props.user.playedGames.length === 0 ? <div><h2>There are no games yet!</h2><img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" /></div> :

            this.props.user.playedGames.map((game, i) => {

              return (
                <div key={i} className="backlogGame-item">
                  <img src={game.image} />
                  {game.name}
                  <div>
                    <button disabled={true}>Game Played</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}


export default BackLog;