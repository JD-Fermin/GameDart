import React from 'react';
import './result.css';

class ResultShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchGame();
  }

  handleButton(e) {

  }

  render() {
    // console.log(this.props.game.image);
    console.log(this.props);

    if (!this.props.game) {
      return null;
    }

    let originalRelease; 
    let publisher;
    let video = '';
    let platforms = '';
    let genres = '';
    let gameplay = [];

    !this.props.game.original_release_date ? originalRelease = 'N/A' : originalRelease = this.props.game.original_release_date.split('-')[0];
    !this.props.game.publisher ? publisher = 'N/A' : publisher = this.props.game.publisher;

    for (let i = 0; i < this.props.game.platforms.length; i++) {
      let platform = this.props.game.platforms[i];
      if (i + 1 === this.props.game.platforms.length) {
        platforms += platform.name;
      } else {
        platforms += platform.name + ', ';
      }
    }

    for (let i = 0; i < this.props.game.genres.length; i++) {
      let genre = this.props.game.genres[i];
      if (i + 1 === this.props.game.genres.length) {
        genres += genre.name;
      } else {
        genres += genre.name + ', ';
      }
    }

    for (let i = 3; i < 8; i++) {
      let gameImg = this.props.game.gameplay[i];

      if (gameImg === undefined) {
        break;
      }
      
      gameplay.push(gameImg.original);
    }

    // for (let i = 0; i < this.props.game.videos.length; i++) {
    //   let videos = this.props.game.videos;

    //   if (videos.length === 0) {
    //     break;
    //   } else {
    //     video = this.props.game.videos[0].site_detail_url;
    //     break;
    //   }
    // }



    // console.log("images", video);

    return (
      <div className="result-show-container">
        <img src={this.props.game.image} />
        <h1>{this.props.game.name}</h1>
        <h2>{genres} | {publisher} | {platforms} | {originalRelease}</h2>
        <h3><a href={this.props.game.reviews}>Reviews</a> | <a href={this.props.game.linkToSite}>Visit on Giant Bomb</a></h3>
        <span>{this.props.game.deck}</span>

        <div className="gameplay-images">
          {
            gameplay.map(gameImg => {
              return <img src={gameImg} />
            })
          }
        </div>
          <button className="add-to-playlist">Add to Playlist</button>
      </div>
    )
  }
}

export default ResultShow;


          // <video width="750" height="500" controls >
          //   <source src={video} type="video/mp4"/>
          // </video>
/* 
  send back an object 
  request = { 
    game_id:   ,
    similar_games: [ `3030-${8392}`, `3030-${8397}` ]    ,
  }
*/