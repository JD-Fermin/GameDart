import React from 'react';
import "./review_form.css"

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
    
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


  render() {
    if (!this.props.users[this.props.review.author]) return null;
    console.log(this.props.users[this.props.review.author])
    return (
    
      <li>
        <div>
          <img src={this.props.users[this.props.review.author].profileImgUrl} alt="" />
          {this.props.users[this.props.review.author].name}
        </div>
        {this.props.review.body}
        <div>{this.populateStars()}</div>
      </li>
    )
  }


}





export default ReviewItem;