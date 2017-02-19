import React from 'react';
import FieldsFormContainer from './fields_form_container';
import { connect } from 'react-redux';
import bookshelvesArray from '../selectors/bookshelves_selector';
import { Link } from 'react-router';

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let myActivitySection;
    if (this.props.loggedIn) {

      const userBookshelfIds = this.props.bookshelves.map((bookshelf) => {
          return bookshelf.id;
      });

      let bookshelf;
      const userShelvesBookIsOn = [];

      for (let i = 0; i < this.props.book.bookshelves.length; i++) {
        bookshelf = this.props.book.bookshelves[i];
        if (userBookshelfIds.includes(bookshelf.id)) {
          userShelvesBookIsOn.push(bookshelf);
        }
      }

      let shelvesBookIsOnLis = userShelvesBookIsOn.map((shelf) => {
        return (<li key={bookshelf.id}>{shelf.title}</li>);
      });

      myActivitySection = (
        <section>
          <h3>MY ACTIVITY</h3>
          <table>
            <tbody>
              <tr>
                <td>Shelves</td>
                <td>
                  <ul>{shelvesBookIsOnLis}</ul>
                </td>
              </tr>
              <tr>
                <td>Review</td>
                <td>Review goes here</td>
              </tr>
            </tbody>
          </table>
        </section>
      );
    } else {
      myActivitySection = "";
    }

    return(
      <main>

        <section className="sidebar">
          <img src={this.props.book.cover_image_url}/>
          <FieldsFormContainer book={this.props.book}/>
        </section>

        <section className="main-content">
          <h1>{this.props.book.title}</h1>
          <h3>{this.props.book.author}</h3>
          {this.props.book.average_rating}

          <p>{this.props.book.description}</p>

          <ul>
            <li>{this.props.book.page_length}</li>
            <li>ISBN:&nbsp;{this.props.book.isbn}</li>
            <li><Link to={this.props.book.url_to_buy}>Get a Copy</Link></li>
          </ul>
        </section>

        {myActivitySection}

      </main>
    );

  }
}

const mapStateToProps = state => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves)
  };
};

export default connect(mapStateToProps, null)(BookDetails);
