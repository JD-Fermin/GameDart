import React from 'react';
import GenreGameIndexContainer from './genre_games_index_container';
import './genres_index.css';


class GenreIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.returnToGenres = this.returnToGenres.bind(this);
    this.revealReturnText = this.revealReturnText.bind(this);
    this.hideReturnText = this.hideReturnText.bind(this);

    this.state = {
      hideText: true,
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

  returnToGenres(e) {
    this.setState({
      changeSection: false,
      selectedGenre: ''
    })
  }

  revealReturnText(e) {
    this.setState({
      hideText: false
    })
  }

  hideReturnText(e) {
    this.setState({
      hideText: true
    })
  }

  render() {
    if (!this.props.genres) {
      return null;
    }

    document.body.style.backgroundImage = "url('https://i.imgur.com/tjz5Xcd.jpeg')";


    const genreGames = this.state.selectedGenre === "" ? null : this.props.genres[this.state.selectedGenre].map((game, i) => {
      return <div key={i}>{game}</div>
    }) 
    
    return (
      <div className="game-dart-container">
        {this.state.changeSection === false ? 
        <h1 id="select-genre">Select a Genre</h1> : <h1 id="select-games">Select Some Games</h1> }
        
        {this.state.changeSection === false ? 
        <div className="genres-container">
          {
            Object.keys(this.props.genres).map((genre, i) => {
              return <div className="genre-item" id={genre} key={i} onClick={this.handleClick}>
                  <h2>{genre}</h2></div>
            })
          }      
        </div> : null}

        { this.state.changeSection === true ?   

          <div className="games-per-genre">

            <div id="back-to-genres">
              <span id="back-to-genres-button" className="material-icons-outlined" >reply_all</span>
              <p>* right-click game to view info</p>
            </div>

            <GenreGameIndexContainer games={this.props.genres[this.state.selectedGenre]} />
          </div> 

        : null }
      </div>
    )
  }
}

export default GenreIndex;