import React from 'react';
import AddShelfFormContainer from './add_shelf_form_container';
import MyBooksIndexContainer from './my_books_index_container';
import { Link } from 'react-router';

export default class BooksFilterPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAddShelfForm: false, shelfTitle: "", selectedBookshelf: ""};
    this.toggleAddShelfForm = this.toggleAddShelfForm.bind(this);
    this.fetchUserBooks = this.fetchUserBooks.bind(this);
    this.filterBooksByBookshelf = this.filterBooksByBookshelf.bind(this);
    this.filterBooksByStatus = this.filterBooksByStatus.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookshelves(this.props.currentUser.id);
  }

  toggleAddShelfForm() {
    this.setState({ showAddShelfForm: true });
  }

  fetchUserBooks() {
    return this.props.fetchUserBooks(this.props.currentUser.id).then(() => { this.props.selectBookshelf(null); });
  }

  filterBooksByBookshelf(bookshelf) {
    return () => {
      return this.props.fetchBookshelfBooks(bookshelf.id).then(() => { this.props.selectBookshelf(bookshelf); });
    };
  }

  filterBooksByStatus(statusName) {
    return () => {
      return this.props.fetchStatusBooks(statusName).then(() => { this.props.selectBookshelf(statusName); });
    };
  }

  render() {
    let form;

    if (this.state.showAddShelfForm) {
      form = (
        <div>
          <h3>Add a Shelf:</h3>
          <AddShelfFormContainer />
        </div>
      );
    } else {
      form = (<button className="add-shelf" onClick={this.toggleAddShelfForm}>add shelf</button>);
    }

    const bookshelfIndexItems = this.props.bookshelves.map((bookshelf) => {
      return (
        <li key={bookshelf.id}>
          <button className="bookshelf-filter-link" onClick={this.filterBooksByBookshelf(bookshelf)}>
            {bookshelf.title}
          </button>
        </li>
      );
    });

    const colon = (this.props.selectedBookshelf) ? ": " : "";
    let bookshelfHeaderDescription;
    if (this.props.selectedBookshelf) {
      bookshelfHeaderDescription = (
        <span className="bookshelf-header-description">:&nbsp;
          <span>{this.props.selectedBookshelf.title}</span>
          <button className="switch-to-all-books" onClick={this.fetchUserBooks}>x</button>
        </span>
      );
    } else {
      bookshelfHeaderDescription = (<span></span>);
    }

    const statusItems = ["read", "currently reading", "to read"].map((statusName) => {
      return (<li key={statusName}><button className="bookshelf-filter-link" onClick={this.filterBooksByStatus(statusName)}>{statusName}</button></li>);
    });

    return(
      <div className="my-books-page">
        <div className="my-books-content">

          <header className="bookshelf-title-header">My Books{bookshelfHeaderDescription}</header>
          <section className="books-filtered-body">
            <nav className="sidebar">
              <h3 className="bookshelves-index-header">bookshelves&nbsp;</h3>
              <Link to="shelves" className="edit-bookshelves">(edit)</Link>

              <ul className="status-index">
                <li><button onClick={this.fetchUserBooks} className="bookshelf-filter-link">all</button></li>
                {statusItems}
              </ul>

              <ul className="bookshelf-index">
                {bookshelfIndexItems}
              </ul>

              {form}
            </nav>
            <MyBooksIndexContainer />
          </section>

        </div>
      </div>
    );
  }

}
