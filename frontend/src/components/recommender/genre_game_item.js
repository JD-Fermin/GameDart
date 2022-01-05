import React from 'react';
import './genres_index.css';
import { withRouter } from 'react-router-dom';

class GenreGameItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
    this.toggleCheck = this.toggleCheck.bind(this);
    this.viewGamePage = this.viewGamePage.bind(this);
    // this.handleRightClick = this.handleRightClick.bind(this);
  }

  viewGamePage(newUrl) {
    this.props.history.push(`/games/${newUrl}`)
    // window.open(
    //   newUrl, '_blank'
    // )
  }

  toggleCheck(e) {
    this.state.checked === true ? this.props.deleteGame(e.target.value) : this.props.pushGame(e.target.value)
    this.setState({ checked: !this.state.checked })
    // console.log(e.target.value); 
    // console.log("selectedGames", this.props.selectedGames);
    // this.props.selectedGames.includes(e.target.value) ?  : 
  }

  // handleRightClick(e) {
  //   e.preventDefault();
  //   console.log('Jacob Batalon Tagalog');
  //   window.open(

  //   )
  // }

  render() {
    let viewGame = `/#/games/${this.props.game.id}`
    let url = window.location.hostname === 'localhost' ? window.location.host : window.location.hostname;
    // let cutLast = url.split('/').slice(-1, 1).join('/');
    // let newUrl = `${url}${viewGame}`; 
    let newUrl = this.props.game.id;

    // console.log('meeeilllff', url)

    // console.log('tagalog', newUrl)
    return (
      <div className={this.state.checked ? "chosen genre-game" : "genre-game" }>
        <div onContextMenu={(e) => {
            e.preventDefault();
            this.viewGamePage(newUrl)
          }
        } className="select-game-image">
          <label htmlFor={this.props.gameId}>
            <img src={this.props.game.image} />
          </label>
        </div>
        <div className="game-checkbox"><input type="checkbox" onChange={this.toggleCheck} id={this.props.gameId} value={this.props.game.id} /></div>
        {/* <div onClick={() => this.viewGamePage(newUrl)} id='view-game-page'>View Game</div> */}
      </div>
    )
  }
}

export default withRouter(GenreGameItem);