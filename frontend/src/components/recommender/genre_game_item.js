import React from 'react';
import './genres_index.css';
import { withRouter } from 'react-router-dom';

class GenreGameItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
    this.toggleCheck = this.toggleCheck.bind(this);
    this.viewGamePage = this.viewGamePage.bind(this);
  }

  viewGamePage(newUrl) {
    this.props.history.push(`/games/${newUrl}`)
  }

  toggleCheck(e) {
    this.state.checked === true ? this.props.deleteGame(e.target.value) : this.props.pushGame(e.target.value)
    this.setState({ checked: !this.state.checked })
    // console.log(e.target.value); 
    // console.log("selectedGames", this.props.selectedGames);
    // this.props.selectedGames.includes(e.target.value) ?  : 
  }

  render() {
    let viewGame = `/games/${this.props.game.id}`
    let url = window.location.href;
    let cutLast = url.split('/').slice(-1, 1).join('/');
    // let newUrl = `${cutLast}${viewGame}`; 
    let newUrl = this.props.game.id;

    console.log('tagalog', window.location.href)
    return (
      <div className={this.state.checked ? "chosen genre-game" : "genre-game" }>
        <div className="select-game-image">
          <label htmlFor={this.props.gameId}>
            <img src={this.props.game.image} />
          </label>
        </div>
        <div className="game-checkbox"><input type="checkbox" onChange={this.toggleCheck} id={this.props.gameId} value={this.props.game.id} /></div>
        <div onClick={() => this.viewGamePage(newUrl)} id='view-game-page'>View Game</div>
      </div>
    )
  }
}

export default withRouter(GenreGameItem);