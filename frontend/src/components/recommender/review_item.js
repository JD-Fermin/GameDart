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
    
    let profileImg = this.props.users[this.props.review.author].profileImgUrl;
    let author = this.props.users[this.props.review.author].name;

    let buttons = 
      <>
        <span className="material-icons-outlined edit-buttons" onClick={this.toggleEdit}>edit</span>
        <span className="material-icons-outlined edit-buttons" onClick={this.handleDelete}>delete</span>
      </>
    
    return (
    
      <li>
        { this.state.editing ? <EditReviewForm toggleEdit={this.toggleEdit} review={this.props.review} updateReview={this.props.updateReview} profileImg={profileImg} author={author} /> :
        <div className="review">
          <img src={profileImg} alt="" />
          <div className="review-details">         
            <h2>{author} { this.props.review.author === this.props.currentId ? buttons : null}</h2>
            <div className="user-rating">
              {this.populateStars()}
            </div>
            <h3 id="review-description">{this.props.review.body}</h3>
          </div>
        </div>
        }
      </li>
    )
  }


}





export default ReviewItem;