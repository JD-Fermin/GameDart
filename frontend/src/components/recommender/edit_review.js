import React from "react";
import "./review_form.css";
import StarRating from "../rating/star_rating";

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: this.props.review.rating, body: this.props.review.body, author: this.props.review.author, id: this.props.review._id , gameId: this.props.review.gameId}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBody = this.handleBody.bind(this)
    this.handleRating = this.handleRating.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateReview(this.state)
    this.props.toggleEdit()
  }

  handleBody(e) {
    this.setState(
      {
        body: e.target.value
      }
    )
  };

  handleRating(e) {
    this.setState(
      {
        rating: e.target.value
      }
    )
  };
  
  populateStars() {
    let stars = []

    // populate gold stars
    for (let i = 0; i < this.props.review.rating; i++) {
      stars.push(<span key={i} className="review-item-rating">★</span>)
    }

    // populate empty stars
    while (stars.length < 5) {
      stars.push(<span key={stars.length} className='ex-review-item-rating'>★</span>)
    }

    return stars;
  }




  render() {
    return (
      <div>
        <h2>Edit Review</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleBody}
            placeholder="Write your review here"
            value={this.state.body}
          ></textarea>
          <div className="rate">
            <StarRating/>
            {/* {this.populateStars()}
            <input
              onChange={this.handleRating}
              type="radio"
              id="star5"
              className="rate"
              value="5"
            />
            <label htmlFor="star5" title="text">
              5 stars
            </label>
            <input
              onChange={this.handleRating}
              type="radio"
              id="star4"
              className="rate"
              value="4"
            />
            <label htmlFor="star4" title="text">
              4 stars
            </label>
            <input
              onChange={this.handleRating}
              type="radio"
              id="star3"
              className="rate"
              value="3"
            />
            <label htmlFor="star3" title="text">
              3 stars
            </label>
            <input
              onChange={this.handleRating}
              type="radio"
              id="star2"
              className="rate"
              value="2"
            />
            <label htmlFor="star2" title="text">
              2 stars
            </label>
            <input
              onChange={this.handleRating}
              type="radio"
              id="star1"
              className="rate"
              value="1"
            />
            <label htmlFor="star1" title="text">
              1 star
            </label> */}
          </div>
          <button type="submit">Edit</button>
        </form>
        <button onClick={this.props.toggleEdit}>Cancel</button>
      </div>
    );
  }
}

export default EditReviewForm;
