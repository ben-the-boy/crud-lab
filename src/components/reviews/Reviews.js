import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  reviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id);

  renderReviews = () => this.reviews().map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>)

  render() {
    return (
      <ul>
        Reviews
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
