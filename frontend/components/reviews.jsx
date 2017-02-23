import React from 'react';

export default class Reviews extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.reviewsLoading) {
      this.props.fetchReviews(this.props.book.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.book.id !== nextProps.book.id && !this.props.reviewsLoading) {
      this.props.fetchReviews(nextProps.book.id);
    }
  }

  render() {
    if (this.props.loading.reviewLoading) {
      return(<div></div>);
    }
    else {
      let reviews;
      if (this.props.reviews.length > 0) {
        reviews = this.props.reviews.map((review, index) => {
          return (
            <li key={index}>
              <section>{review.author}</section>
              <p>{review.body}</p>
            </li>
          );
        });
      }
      else {
        reviews = (<li className="no-reviews">None so far.</li>);
      }




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
