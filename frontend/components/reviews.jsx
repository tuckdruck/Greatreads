import React from 'react';

export default class Reviews extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.book.id);
  }

  render() {
    if (this.props.loading.reviewLoading) {
      return(<div></div>);
    }
    else {

      const reviews = this.props.reviews.map((review, index) => {
        return (
          <li key={index}>
            <section>{review.author}</section>
            <p>{review.body}</p>
          </li>
        );
      });

      return(
        <div className="reviews">
          <h3 className="book-details-subheader">COMMUNITY REVIEWS</h3>
          <ul className="reviews">
            {reviews}
          </ul>
        </div>
      );
    }
  }

}
