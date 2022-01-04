import { set } from "express/lib/application";
import React, { useState, useCallback, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {

  let reviewedRating = props.status === "editing" ? props.rating : null
  
  const [rating, setRating] = useState(reviewedRating);
  const [hover, setHover] = useState(null);
  const handleSetRating = event => {
    // console.log(event)
    props.handleRating(event)
    
  }

  useEffect(() => {
    let localRating = props.rating ? parseInt(props.rating) : null;
    console.log(localRating)
    if (props.status !== "editing") setRating(localRating)
  })

  return (
  <div className="stars"> 
    {[...Array(5)].map((star, i) => {
      const ratingValue = i + 1;
     
      return (
        <label>
          <input 
            type="radio" 
            name="rating" 
            value={ratingValue} 
            onClick={(event) => 
              {
                setRating(ratingValue)
                handleSetRating(event)
              }
            } 
          />

          <FaStar 
            className="star" 
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" } 
            size={38} 
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />

        </label>
      );
    })}
  </div>
  );
};

export default StarRating;