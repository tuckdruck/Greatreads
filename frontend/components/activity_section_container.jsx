import React from 'react';
import { connect } from 'react-redux';
import FieldsFormContainer from './fields_form_container';

export default class ActivitySection extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showEditForm: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)  });
  }

  render() {
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

    let userShelvesBookIsOnFormatted = userShelvesBookIsOn.map((shelf, index) => {
      return shelf.title;
    }).join(", ");

    let fieldsForm = "";

    if (this.state.showEditForm) {
      fieldsForm = (
        <div>
          <FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm} className="from-book-show"/>
        </div>
      );
    }
    else {
      fieldsForm = "";
    }

    return(
      <section className="activity">
        <h3 className="book-details-subheader">MY ACTIVITY</h3>
        <table className="activity">
          <tbody>
            <tr>
              <td className="table-title">Shelves</td>
              <td>
                {userShelvesBookIsOnFormatted}
                <button onClick={this.toggleEditForm}>edit</button>
                {fieldsForm}
              </td>
            </tr>
            <tr>
              <td className="table-title">Review</td>
              <td>Review goes here</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }

}
