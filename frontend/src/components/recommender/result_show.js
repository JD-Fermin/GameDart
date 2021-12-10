import React from 'react';
import './result.css';
import { withRouter } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class ResultShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  handleButton(e) {
    const payload = {
      gameId: this.props.game.id,
      similar_games: [],
      id: this.props.currentUserId,
      name: this.props.game.name,
      image: this.props.game.image
    };
  
    if (this.props.game.similar_games) {
      for (let i = 0; i < this.props.game.similar_games.length; i++) {
        payload.similar_games.push(`3030-${this.props.game.similar_games[i].id}`)
      }
    }   
    this.props.updateBackLogGames(payload)
    this.props.history.push('/backlog')
    
  
  }

  render() {

    document.body.style.backgroundImage = "url('https://i.imgur.com/eBPL6Bz.jpg')";
   
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

    for (let i = 0; i < this.props.game.gameplay.length; i++) {
      let gameImg = this.props.game.gameplay[i];

      if (gameImg === undefined) {
        break;
      }
      
      gameplay.push(gameImg.original);
    }


    let gallery;
    if (gameplay.length !== 0){
      gallery = (
        <div className="gameplay-images">
          <div id='highlight' onClick={this.props.openModal}></div>
          <Carousel autoPlay={true} centerMode={true} showThumbs={false} infiniteLoop={true}>
            {
              gameplay.map(gameImg => {
                return <div>
                  <img src={gameImg} />
                </div>
              })
            }
          </Carousel>
        </div>
      )
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
    // console.log('resultshowpage')
    // console.log(this.props)

    return (
      <div className="result-show-container">
        {gallery}
        <div id='game-info-container'>
          <div id="game-cover">
            <img src={this.props.game.image} />
            <button onClick={this.handleButton} className="add-to-playlist">Add to Playlist</button>
          </div>
          <h1 id='game-name'>{this.props.game.name}</h1>
          <h2 id='general-info'>{genres} | {publisher} | {platforms} | {originalRelease}</h2>
          <h3><a href={this.props.game.reviews}>Reviews</a> | <a href={this.props.game.linkToSite}>Visit on Giant Bomb</a></h3>
          <span>{this.props.game.deck}</span>
        </div>
      </div>
    )
  }
}

export default withRouter(ResultShow);


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