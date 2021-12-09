import React from 'react';
import './genres_index.css';


class GenreGameItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck(e) {
    this.state.checked === true ? this.props.deleteGame(e.target.value) : this.props.pushGame(e.target.value)
    this.setState({ checked: !this.state.checked })
    // console.log(e.target.value); 
    // console.log("selectedGames", this.props.selectedGames);
    // this.props.selectedGames.includes(e.target.value) ?  : 
  }

  render() {
    return (
      <div className={this.state.checked ? "chosen genre-game" : "genre-game" }>
        <div className="select-game-image"><label htmlFor={this.props.gameId}><img src={this.props.game.image} /></label></div>
        <div className="game-checkbox"><input type="checkbox" onChange={this.toggleCheck} id={this.props.gameId} value={this.props.game.id} /></div>
      </div>
    )
  }
}

export default GenreGameItem;