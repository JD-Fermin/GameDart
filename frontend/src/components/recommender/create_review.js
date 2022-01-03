import React from 'react';
import "./review_form.css"
import StarRating from '../rating/star_rating';

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: this.props.currentUserId,
      gameId: this.props.gameId,
      body: "",
      rating: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentWillUnmount() {
    this.props.removeReviewErrors();
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
      // .then(res => {
        // if (!this.props.errors || Object.values(this.props.errors).length <= 0) {
          this.props.toggleCreateReview();
      //   }
      // })
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

  renderErrors() {
  let errors = Object.values(this.props.errors)
    return (
      <div className="errors-container">
        <ul className="errors">
          {
            errors.map((error, idx) => {
              return (
                <li key={idx} className="error" >
                  {error}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }



  render() {
    let errorsArr = Object.values(this.props.errors)
    return (
      <div className="create-review-form">
        <h2>Create Review</h2>
        <form onSubmit={this.handleSubmit}>
          <StarRating
            handleRating={e => {
              this.handleRating(e)
            }}
          />

          <textarea onChange={this.handleBody} placeholder="Write your review here" value={this.state.body}></textarea>
          <div>
            {
              this.props.errors && errorsArr.length > 0 ? (
                this.renderErrors()
              ) : ("")
            }
          </div>
          <button type="submit">Create</button>
          <button onClick={this.props.toggleCreateReview}>Cancel</button>
        </form>
      </div >
    )
  }
}


export default CreateReviewForm;