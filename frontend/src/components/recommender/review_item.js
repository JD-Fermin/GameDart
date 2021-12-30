import React from 'react';
import "./review_form.css"
import EditReviewForm from './edit_review';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editing: false }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.review.author)
  }
  
  populateStars(){
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

  handleDelete() {
    this.props.deleteReview(this.props.review._id)
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing })
  }


  render() {
    
    if (!this.props.users[this.props.review.author]) return null;
    let buttons = <>
      <button onClick={this.toggleEdit}>Edit</button>
      <button onClick={this.handleDelete}>Delete</button>
    </>
    
    return (
    
      <li>
        <div className="review">
          <img src={this.props.users[this.props.review.author].profileImgUrl} alt="" />
          <div className="review-details">         
            <h2>{this.props.users[this.props.review.author].name}</h2>
            <div className="user-rating">
              {this.populateStars()}
            </div>
            <h3>{this.props.review.body}</h3>
          </div>
        </div>
        { this.props.review.author === this.props.currentId ? buttons : null}
        { this.state.editing ? <EditReviewForm toggleEdit={this.toggleEdit} review={this.props.review} updateReview={this.props.updateReview}/> : null}
      </li>
    )
  }


}





export default ReviewItem;