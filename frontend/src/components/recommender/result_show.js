import React from 'react';
import './result.css';
import { withRouter } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CreateReviewForm from "./create_review";
import ReviewItemContainer from "./review_item_container";

class ResultShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleButton = this.handleButton.bind(this);
    this.visitSite = this.visitSite.bind(this);
    this.newGame = this.newGame.bind(this);
    this.toggleCreateReview = this.toggleCreateReview.bind(this);

    this.state = { createReview: false };
  }

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchUser(this.props.currentUserId);
    this.props.fetchReviews();
  }

  componentDidUpdate(prevProps){
    if (Object.values(this.props.reviews).length !== Object.values(prevProps.reviews).length) {
      this.props.fetchReviews()
    }

    if (prevProps.match.params.gameId != this.props.match.params.gameId) {
      this.props.fetchGames()
    }
  }

  toggleCreateReview() {
    this.setState({ createReview: !this.state.createReview })
  }

  checkInclusion(arr1, arr2, target) {
    for (let i = 0; i < arr1.length; i++) {
      let gameObj = arr1[i];
      if (gameObj.id === target) return true;
    }

    for (let i = 0; i < arr2.length; i++) {
      let gameObj = arr2[i];
      if (gameObj.id === target) return true;
    }

    return false;
  }

  newGame() {
    this.props.history.push('/gamedartit');
  }

  handleButton(e) {
    if (!this.checkInclusion(this.props.user.backLogGames, this.props.user.playedGames, this.props.game.id)) {

      const payload = {
        gameId: this.props.game.id,
        similar_games: [],
        id: this.props.currentUserId,
        name: this.props.game.name,
        image: this.props.game.image
      };

       

      this.props.updateBackLogGames(payload)
    }

    // this.props.history.push('/playlist')
  }

  visitSite(e) {
    window.open(
      this.props.game.linkToSite, '_blank'
    );
  }
  
  avgRating(obj) {
    let arr = Object.values(obj)
    if (arr.length === 0) {
      return "n/a"
    }

    let sum = 0
    for (let i = 0; i < arr.length; i++ ) {
      sum += arr[i].rating;
    }
    let avg = sum / arr.length;

    return Math.round(avg * 10) / 10
  }

  madeReview(userId) {
    for (let review in this.props.reviews) {
      if (this.props.reviews[review].author === userId) {
        return true;
      }
    }

    return false;
  }


  render() {

    document.body.style.backgroundImage = "url('https://i.imgur.com/eBPL6Bz.jpg')";

    if (!this.props.game) {
      return null;
    }

    if (!this.props.user) {
      return null;
    }

    let originalRelease;
    let publishers;
    let video = '';
    let platforms = '';
    let genres = '';
    let gameplay = [];

    !this.props.game.original_release_date ? originalRelease = 'N/A' : originalRelease = this.props.game.original_release_date.split('-')[0];
    !this.props.game.publishers ? publishers = 'N/A' : publishers = this.props.game.publishers[0].name;

    if (this.props.game.platforms) {
      for (let i = 0; i < this.props.game.platforms.length; i++) {
        let platform = this.props.game.platforms[i];
        if (i + 1 === this.props.game.platforms.length) {
          platforms += platform.name;
        } else {
          platforms += platform.name + ', ';
        }
      }
    }

    if (this.props.game.genres) {
      for (let i = 0; i < this.props.game.genres.length; i++) {
        let genre = this.props.game.genres[i];
        if (i + 1 === this.props.game.genres.length) {
          genres += genre.name;
        } else {
          genres += genre.name + ', ';
        }
      }
    }

    if (this.props.game.gameplay) {
      for (let i = 0; i < this.props.game.gameplay.length; i++) {
        let gameImg = this.props.game.gameplay[i];

        if (gameImg === undefined) {
          break;
        }

        gameplay.push(gameImg.original);
      }
    }


    let gallery;
    if (gameplay.length !== 0) {
      gallery = (
        <div className="gameplay-images">
          <div id='highlight' onClick={this.props.openCarousel}></div>
          <Carousel autoPlay={true} centerMode={true} showThumbs={false} infiniteLoop={true}>
            {
              gameplay.map((gameImg, i) => {
                return <div key={i} >
                  <img src={gameImg} />
                </div>
              })
            }
          </Carousel>
        </div>
      )
    }
    
    let createForm = this.state.createReview ? 
      <CreateReviewForm
        gameId = {this.props.game.id}
        currentUserId = {this.props.currentUserId}
        createReview = {this.props.createReview}
        toggleCreateReview = {this.toggleCreateReview}
        removeReviewErrors = {this.props.removeReviewErrors}
        errors = {this.props.errors}
      /> : null;

    return (
      <div className="result-show-container">
        {gallery}
        <div id='game-info-container'>
          <div id="game-cover">
            <img src={this.props.game.image} />
            <button onClick={this.handleButton} className="add-to-playlist">{this.checkInclusion(this.props.user.backLogGames, this.props.user.playedGames, this.props.game.id) ? "Return to Playlist" : "Add to Playlist"}</button>
            <div onClick={this.visitSite} className="visit-on-giant-bomb">Giant Bomb</div>
            <div onClick={this.newGame} className="new-game">Back to GameDart</div>
          </div>

          <div className="game-title-and-rating">
            <h1 id='game-name'>{this.props.game.name} | {this.avgRating(this.props.reviews)} <span className='avg-rating'>★</span></h1>
            {/* <h2 id='avg-rating'>{this.avgRating(this.props.reviews)} <span className='ex-review-item-rating'>★</span></h2> */}
          </div>

          <h2 id='general-info'>{genres} | {publishers} | {platforms} | {originalRelease}</h2>
          {/* <h3><a href={this.props.game.reviews}>Reviews</a> | <a href={this.props.game.linkToSite}>Visit on Giant Bomb</a></h3> */}
          <span id="game-description">{this.props.game.deck}</span>
        </div>
        <div className="review-section">
        {/* <div className="rating-header">
          <h2>Game Rating Average</h2>
          <h3>{this.avgRating(this.props.reviews)} <span className='ex-review-item-rating'>★</span> </h3>
        </div> */}


        { !this.state.createReview ? 
        <div className="review-container">
          <h1>Reviews</h1>
          <ul>
            {
              Object.values(this.props.reviews).map((review, i) => {
                return <ReviewItemContainer
                  key={i}
                  review ={review}
                  updateReview ={this.props.updateReview}
                  deleteReview ={this.props.deleteReview}
                /> 
              })
            }
          </ul>
          { !this.state.createReview && !this.madeReview(this.props.currentUserId) ? 
          
            <>
              <span onClick={this.toggleCreateReview} className="material-icons-outlined add-review">add_circle</span>
            </>
          
            : null 
          }

          </div>

        : 

        <div className="toggle-review">
          {
            this.madeReview(this.props.currentUserId) ? null :
            <>{createForm}</>
          } 
        </div>
        }
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