import React from 'react';
import "./review_form.css"

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
    
  }
  
  populateStars(){
    this.stars = []
  
    // populate gold stars
    for (let i = 0; i < this.props.review.rating; i++) {
      this.stars.push(<FaStar key={i} size={20} color={'gold'} />)
    }
  
    // populate empty stars
    while (this.stars.length < 5) {
      let i = this.stars.length
      this.stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
    }
  }


  render() {
    return (
    
      <li >{this.props.review.body}
        {this.props.review.rating}

      </li>
    )
  }


}





export default ReviewItem;