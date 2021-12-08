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
    if (Object.keys(this.props.fetchedGames).length === 0) {
      return null
    } 

    let games = Object.values(this.props.fetchedGames);


    return(
      <div className="genre-game-index">
        {
          games.map(game => {
            return <div className="genre-game">
              <img src={game.image} />
              <h2>{game.name}</h2>
            </div>
          })
        }
      </div>
    )
  }
}

export default GenreGameIndex;