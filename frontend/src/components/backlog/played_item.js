import React from 'react';
import { withRouter } from 'react-router-dom'

class PlayedItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showSettings: false,
    }
    this.handlePlayed = this.handlePlayed.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.viewGame = this.viewGame.bind(this);
  }

  componentDidMount(){
    this.props.fetch(this.props.currentId);
  }

  handlePlayed(game) {
    const payload = {
      gameId: game.id,
      id: this.props.currentId,
      name: game.name,
      image: game.image
    };
    console.log(this.props.setPlayed); 

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

  toggleSettings() {
    this.setState({showSettings: !this.state.showSettings});
  }

  viewGame(gameId) {
    this.props.toggleSideNav()
    this.props.history.push(`/games/${gameId}`)
  }

  render() {
    return (
      <div className={`${this.state.showSettings ? "backlogGame-item backlogGame-item-open" : "backlogGame-item"}`} onClick={() => this.toggleSettings()}>
      <img src={this.props.game.image} />
      <div className="backlogGame-options">
        <div className="backlogGame-title">{ this.props.game.name }</div>
        <div className="backlogGame-buttons">
          <button className="remove-from-played" onClick={() => this.handleBack(this.props.game)}>Remove from Games Played</button>
          <button className="view-game-button" onClick={() => this.viewGame(this.props.game.id)}>View Game Page</button>
        </div>
        <div className={`${this.state.showSettings ? "setting-button setting-button-open" : "setting-button"}`} onClick={() => this.toggleSettings()}>&#8964;</div>
      </div>    
    </div>
    // <div className="backlogGame-item">
    //   <div className="backlogGame-options">
    //     <div className="backlogGame-title">{ game.name }</div>
    //     <div className="backlogGame-buttons">
    //       <button className="remove-from-played" onClick={() => this.handleBack(game)}>Remove from Games Played</button>
    //       <button className="view-game-button" onClick={() => this.viewGame(game.id)}>View Game Page</button>
    //     </div>
    //   </div>
    //   <img src={game.image} />
    // </div>
    )
  }
}

export default withRouter(PlayedItem);