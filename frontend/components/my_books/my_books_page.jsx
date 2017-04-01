import React from 'react';
import AddShelfFormContainer from '../add_shelf_form_container';
import MyBooksIndexContainer from './my_books_index_container';
import { Link } from 'react-router';

export default class BooksFilterPane extends React.Component {

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
    this.props.clearErrors();
  }

  fetchUserBooks() {
    return this.props.fetchUserBooks(this.props.currentUser.id)
      .then(() => { this.props.selectBookshelf(null); });
  }

  filterBooksByShelf(bookshelf) {
    return () => {
      return this.props.fetchBookshelfBooks(bookshelf.id)
        .then(() => { this.props.selectBookshelf(bookshelf); });
    };
  }

  filterBooksByStatus(statusName) {
    return () => {
      return this.props.fetchStatusBooks(statusName)
        .then(() => { this.props.selectBookshelf(statusName); });
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
    let filterMethod;
    if (readStatus) {
      filterMethod = this.filterBooksByStatus;
    } else {
      filterMethod = this.filterBooksByShelf;
    }
    <button className="bookshelf-filter-link"
      onClick={filterMethod(shelf)}>
      {shelf}
    </button>
  }

  bookshelves() {
    return this.props.bookshelves.map((bookshelf) => {
      return (
        <li key={bookshelf.id}>
          {this.filterButton(bookshelf.title, false); }
        </li>
      );
    });
  }

  statusItems() {
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

  sidebar() {
    <nav className="sidebar">
      <h3 className="bookshelves-index-header">bookshelves&nbsp;</h3>
      <Link to="shelves" className="edit-bookshelves">(edit)</Link>

      <ul className="status-index">
        {this.allBooksLi()}{this.statusItems()}
      </ul>

      <ul className="bookshelf-index">{this.bookshelves()}</ul>

      {this.addShelfForm()}
    </nav>
  }

  header() {
    return(
      <header className="bookshelf-title-header">
        My Books{this.bookshelfHeaderDescription()}
      </header>
    );
  }

  render() {
    if (this.props.loading.bookshelvesLoading) {
      return(<div className="loading"></div>);
    }
    else {
      return(
        <div className="my-books-page">
          <div className="my-books-content">
            {this.header()}
            <section className="books-filtered-body">
              {this.sidebar()}
              <MyBooksIndexContainer />
            </section>
          </div>
        </div>
      );
    }
  }

}
