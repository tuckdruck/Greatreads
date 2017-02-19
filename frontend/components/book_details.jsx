import React from 'react';
import FieldsFormContainer from './fields_form_container';

export default class BookDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const publishedText = `Published ${this.props.book.published_date} by ${this.props.book.publisher}`;
    return(
      <main>

        <section className="sidebar">
          <img src={this.props.book.cover_image_url}/>
          <FieldsFormContainer />
        </section>

        <section className="main-content">
          <h1>{this.props.book.title}</h1>
          <h3>{this.props.book.author}</h3>
          {this.props.book.average_rating}

          <p>{this.props.book.description}</p>

          <ul>
            <li>{this.props.book.page_length}</li>
            <li>{publishedText}</li>
            <li>ISBN:&nbsp;{this.props.book.isbn}</li>
            <li>Get a Copy:&nbsp;{this.props.book.url_to_buy}</li>
          </ul>
        </section>

      </main>
    );

  }
}
