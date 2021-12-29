import React from 'react';
import "./review_form.css"

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      author: this.props.currentUserId,
      gameId: this.props.gameId,
      body: "",
      rating: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this)
    this.handleRating = this.handleRating.bind(this)
  }

  handleBody(e) {
    this.setState(
      {
        body: e.target.value
      }
    )
  };

  handleSubmit(e) {
    e.preventDefault()
    this.props.createReview(this.state)
    this.setState(
      {
        body: "",
        rating: ""
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

  render() {
    return (
      <div >
        <h2>Create Review</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleBody} placeholder="Write your review here" value={this.state.body}></textarea>
          <div class="rate">
            <input onChange={this.handleRating} type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input onChange={this.handleRating} type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input onChange={this.handleRating} type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input onChange={this.handleRating} type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input onChange={this.handleRating} type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
          <button type="submit">Create</button>
        </form>
      </div >
    )
  }
}


export default CreateReviewForm;