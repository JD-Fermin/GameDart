import React from 'react';
import "./review_form.css"

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
    
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


  render() {
    return (
    
      <li >
        {this.props.review.body}
        <div>{this.populateStars()}</div>
      </li>
    )
  }


}





export default ReviewItem;