import React from 'react';
import AddShelfFormContainer from '../add_shelf_form_container';
import MyBooksIndexContainer from './my_books_index_container';
import { Link } from 'react-router';

export default class MyBooksPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAddShelfForm: false, shelfTitle: "", selectedBookshelf: ""
    };

    this.toggleAddShelfForm = this.toggleAddShelfForm.bind(this);
    this.fetchUserBooks = this.fetchUserBooks.bind(this);
    this.filterBooksByShelf = this.filterBooksByShelf.bind(this);
    this.filterBooksByStatus = this.filterBooksByStatus.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookshelves(this.props.currentUser.id);
  }

  toggleAddShelfForm() {
    this.setState({ showAddShelfForm: true });
    this.props.receiveErrors([]);
  }

  fetchUserBooks() {
    return this.props.fetchUserBooks(this.props.currentUser.id)
      .then(() => { this.props.selectBookshelf(null); });
  }

  filterBooksByShelf(bookshelf) {
    return () => {
      return this.props.fetchBookshelfBooks(bookshelf.id)
        .then(() => { return this.props.selectBookshelf(bookshelf); });
    };
  }

  filterBooksByStatus(statusName) {
    return () => {
      return this.props.fetchStatusBooks(statusName)
        .then(() => { return this.props.selectBookshelf(statusName); });
    };
  }

  selectedShelfTitle() {
    if (this.props.selectedBookshelf.title) {
      return this.props.selectedBookshelf.title;
    } else {
      return this.props.selectedBookshelf;
    }
  }

  removeBookshelfFilterButton() {
    return(
      <button
        className="switch-to-all-books"
        onClick={this.fetchUserBooks}>
        x
      </button>
    );
  }

  bookshelfHeaderDescription() {
    if (this.props.selectedBookshelf) {
      return(
        <span className="bookshelf-header">:&nbsp;
          <span>{this.selectedShelfTitle()}</span>
          {this.removeBookshelfFilterButton()}
        </span>
      );
    }
  }

  openAddShelfForm() {
    return(<div><h3>Add a Shelf:</h3><AddShelfFormContainer /></div>);
  }

  closedAddShelfForm() {
    return(
      <button className="add-shelf-toggle"
        onClick={this.toggleAddShelfForm}>
        add shelf
      </button>
    );
  }

  addShelfForm() {
    if (this.state.showAddShelfForm) { return this.openAddShelfForm(); }
    else { return this.closedAddShelfForm(); }
  }

  filterButton(shelf, readStatus) {
    let filter;
    let title = readStatus ? shelf : shelf.title;

    if (readStatus) { filter = this.filterBooksByStatus; }
    else { filter = this.filterBooksByShelf; }

    return(
      <button className="bookshelf-filter-link" onClick={filter(shelf)}>
        {title}
      </button>
    );
  }

  bookshelves() {
    return this.props.bookshelves.map((bookshelf) => {
      return (
        <li key={bookshelf.id}>
          {this.filterButton(bookshelf, false)}
        </li>
      );
    });
  }

  statuses() {
    return ["read", "currently reading", "to read"].map((status) => {
      return(<li key={status}>{this.filterButton(status, true)}</li>);
    });
  }

  allBooksLi() {
    return(
      <li>
        <button
          onClick={this.fetchUserBooks}
          className="bookshelf-filter-link">
          all
        </button>
      </li>
    );
  }

  filterButtons() {
    return(
      <div>
        <ul className="status-index">
          {this.allBooksLi()}{this.statuses()}
        </ul>

        <ul className="bookshelf-index">{this.bookshelves()}</ul>
      </div>
    );
  }

  sidebar() {
    return(
      <nav className="sidebar">
        <h3 className="bookshelves-header">bookshelves&nbsp;</h3>
        <Link to="shelves" className="edit-bookshelves">(edit)</Link>
        {this.filterButtons()}
        {this.addShelfForm()}
      </nav>
    );
  }

  header() {
    return(
      <header className="bookshelf-title-header">
        My Books{this.bookshelfHeaderDescription()}
      </header>
    );
  }

  loading() {
    return this.props.loading.bookshelvesLoading;
  }

  content() {
    return(
      <section className="books-filtered-body">
        {this.sidebar()}<MyBooksIndexContainer />
      </section>
    );
  }

  render() {
    if (this.loading()) { return(<div className="loading"></div>); }
    else {
      return(
        <div>
          <div className="my-books-pg">{this.header()}{this.content()}
          </div>
        </div>
      );
    }
  }

}
