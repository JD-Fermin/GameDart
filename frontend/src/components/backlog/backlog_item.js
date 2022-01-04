import React from 'react';
import { Link } from 'react-router-dom'

class BackLogItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showSettings: false,
    }
    this.handlePlayed = this.handlePlayed.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.openSettings = this.openSettings.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
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
    console.log(game); 
    this.props.setBackLog(payload);
    this.props.deletePlayed(payload);
  }

  openSettings(type) {
    switch(type){
      case 'showSettings':
        this.setState({showSettings: true})
        break;
      default:
        return
    }
  }

  closeSettings() {
    this.setState({showSettings: false})
  }

  viewGame(gameId) {
    this.props.history.push(`/games/${gameId}`)
  }

  render() {
    return (
    <div className="backlogGame-item">
      <div className="backlogGame-options">
        <div className="backlogGame-title">{ this.props.game.name }</div>
        {
          this.state.showSettings ? (
            <div className="backlogGame-buttons">
              <button className="add-to-played" onClick={() => this.handlePlayed(this.props.game)}>Add to Games Played</button>
              <button className="remove-game" onClick={() => this.handleRemove(this.props.game.id)}>Remove Game</button>
              {/* <Link to='/games/' className="view-game-button">View Game Page</Link> */}
              <button className="view-game-button" onClick={() => this.viewGame(this.props.game.id)}>View Game Page</button>
              <div className="setting-button setting-button-open" onClick={() => this.closeSettings()}>&#8964;</div>
            </div>
          ) : (<div className="setting-button" onClick={() => this.openSettings('showSettings')}>&#8964;</div>)
        }
      </div>    
      <img src={this.props.game.image} />
    </div>
    )
  }
}

export default BackLogItem;