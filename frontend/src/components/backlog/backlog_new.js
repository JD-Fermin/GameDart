import React from "react";
import "./backlog.css";
import BacklogItem from './backlog_item';
import PlayedItem from "./played_item";
import Tabs from "./backlog_tabs";

class BackLog extends React.Component {
  constructor(props) {
    super(props)
    this.viewGame = this.viewGame.bind(this);
    // this.handleSwitch = this.handleSwitch.bind(this);
    
  }

  componentDidMount() {
    this.props.fetch(this.props.currentId);
    window.addEventListener("hashchange", () => {
      if (document.getElementById("side-nav") && document.getElementById("side-nav").clientWidth === 350) {
        this.props.toggleSideNav()
      }
    });
  }
 
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

  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div className="selected-games-container">

        {!this.props.user.backLogGames.length && !this.props.user.playedGames.length ? 
          <div className="played-games-container">
            <img id="no-games" src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" />
          </div> : 
          <Tabs>
          <div label="Playlist" className="backlog-container">
            {this.props.user.backLogGames.map((game, i) => {

              return (
                 <BacklogItem key={i}  fetch={this.props.fetch} currentId={this.props.currentId} game={game} delete={this.props.delete} setPlayed={this.props.setPlayed} setBackLog={this.props.setBackLog} deletePlayed={this.props.deletePlayed}/>
              )
            })}
          </div>

          <div label="Played Games" className="played-games-container">   

            {this.props.user.playedGames.map((game, i) => {

              return (
                <PlayedItem key={i} fetch={this.props.fetch} currentId={this.props.currentId} game={game} delete={this.props.delete} setPlayed={this.props.setPlayed} setBackLog={this.props.setBackLog} deletePlayed={this.props.deletePlayed}/>
              )
            })}
          </div>
        
      </Tabs>
      }
      </div>
    ) 
  }
}


export default BackLog;