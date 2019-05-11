import React from 'react';
import PropTypes from 'prop-types'



const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt='' /* image source goes here */ />
        </div>
        <span>By {props.card.author/* author goes here */}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
card: PropTypes.shape({
  headline: PropTypes.string,
  img:PropTypes.string,
  author: PropTypes.string
})
}

// Make sure to include PropTypes.

export default Card;
