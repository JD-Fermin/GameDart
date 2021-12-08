import React from 'react';

class GenreGameIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    for (let i = 0; i < this.props.games.length; i++) {
      let game = this.props.games[i];
      this.props.fetchGame(game);
    }
    // this.props.games.forEach(game => this.props.fetchGame(game))
  }

  render() {
    console.log(this.props);
    if (!this.props.fetchedGames) {
      return null
    } 

    let games = Object.values(this.props.fetchedGames);
    // console.log('GAAAAMMMEMEMEESSSS', games);
    return(
      <div className="genre-game-index">
        {
          games.map(game => {
            if (game.id) {              
              let gameId = parseInt(game.id.split('-').join(''));

            return <div key={gameId} className="genre-game">
              <img src={game.image} />
              <h1>{gameId}</h1>
              <h2>{game.name}</h2>
            </div>
            }
          })
        }
      </div>
    )
  }
}

export default GenreGameIndex;