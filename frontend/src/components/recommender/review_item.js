import React from 'react';
import "./review_form.css"

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
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


  render() {
    
    if (!this.props.users[this.props.review.author]) return null;
    let buttons = <>
      <button>Edit</button>
      <button onClick={this.handleDelete}>Delete</button>
    </>
    console.log(this.props.users[this.props.review.author])
    return (
    
      <li>
        <div>
          <img src={this.props.users[this.props.review.author].profileImgUrl} alt="" />
          {this.props.users[this.props.review.author].name}
        </div>
        {this.props.review.body}
        <div>{this.populateStars()}</div>
        { this.props.review.author === this.props.currentId ? buttons : null}
      </li>
    )
  }


}





export default ReviewItem;