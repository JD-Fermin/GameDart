import React from 'react';
import './genres_index.css';
import GenreGameItem from './genre_game_item';
import { withRouter } from 'react-router-dom';

class GenreGameIndex extends React.Component {
  constructor(props) {
    super(props)
    this.selected = [];
    this.pushGameToSelected = this.pushGameToSelected.bind(this);
    this.deleteGameFromArray = this.deleteGameFromArray.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < this.props.games.length; i++) {
      let game = this.props.games[i];
      this.props.fetchGame(game);
    }
    // this.props.games.forEach(game => this.props.fetchGame(game))
  }

  handleClick() {
    let mostSimilar = [];
    let similarGames = [];

    for (let i = 0; i < this.selected.length; i++) {
      similarGames = similarGames.concat(this.props.fetchedGames[this.selected[i]].similar_games);
    }

    let similarGameIds = [];

    for (let i = 0; i < similarGames.length; i++) {
      if (!similarGameIds.includes(similarGames[i].id)) {
        similarGameIds.push(similarGames[i].id)
      } else {
        mostSimilar.push(similarGames[i].id);
      }
    }
    
    let randomGameIndex = Math.floor(Math.random() * similarGameIds.length);
    let result = `3030-${similarGameIds[randomGameIndex]}`;

    this.props.history.push(`/games/${result}`)
    // console.log(mostSimilar);
  }
      
  pushGameToSelected(game) {
    if (!this.selected.includes(game)) {
      this.selected.push(game)
    }
    // console.log("game to push", game)
    // console.log(this.selected);
  }

  deleteGameFromArray(game) {
    // console.log("GAME TO DELETE", game)
    let index = this.selected.indexOf(game);
    // console.log("index to delete", index);
    let result = this.selected.slice(0, index).concat(this.selected.slice(index + 1));
    this.selected = result;
    // console.log(this.selected);
  }



  render() {
    // console.log('STATEEEEE', this.state);
    if (!this.props.fetchedGames) {
      return null
    } 
    
    let games = [];  //Object.values(this.props.fetchedGames);  // need to refresh slice of state
    console.log('fetched', this.props.fetchedGames)
    
    for (let i = 0; i < this.props.games.length; i++) {
      if (this.props.fetchedGames[this.props.games[i]]) {
        games.push(this.props.fetchedGames[this.props.games[i]])
      }
    }
    
    console.log('this.props.games', this.props.games);
    console.log('GAAAAMMMEMEMEESSSS', games);
    return(
      <div className="genre-game-index">
        <div className="select-games-form">
        {
          games.map(game => {
            if (game.id) {              
              let gameId = parseInt(game.id.split('-').join(''));

              return <GenreGameItem key={gameId} gameId={gameId} game={game} pushGame={this.pushGameToSelected} deleteGame={this.deleteGameFromArray}/> 
            }
          })
        }
        </div>
        <div className="submit-select-button" onClick={this.handleClick}><input type="submit" value="Gamedart it!" id="game-dart-button"/></div>
      </div>
    )
  }
}

export default withRouter(GenreGameIndex);