import React from 'react';
import GenreGameIndexContainer from './genre_games_index_container';

class GenreIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      changeSection: false,
      selectedGenre: ""
    }
  }

  componentDidMount() {
    this.props.gameSeeds();
  }

  handleClick(e) {
    this.setState({
      changeSection: true,
      selectedGenre: e.target.innerText
    })
  }

  render() {
    if (!this.props.genres) {
      return null;
    }


    // const genreGames = this.state.selectedGenre === "" ? null : this.props.genres[this.state.selectedGenre].map((game, i) => {
    //         return <div key={i}>{game}</div>
    //       }) 
    
    return (
      <div className="game-dart-container">

        {this.state.changeSection === false ? 
        <div className="genres-container">
          {
            Object.keys(this.props.genres).map((genre, i) => {
              return <div className="genre-item" key={i} onClick={this.handleClick}>
                {genre}</div>
            })
          }      
        </div> : null}

        {this.state.changeSection === true ?   
        <div className="games-per-genre">
          <h2>{this.state.selectedGenre}</h2>
            <GenreGameIndexContainer games={this.props.genres[this.state.selectedGenre]} />
        </div> : null}
      </div>
    )
  }
}

export default GenreIndex;