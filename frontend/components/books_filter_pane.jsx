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
    this.filterBooks = this.filterBooks.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookshelves();
  }

  componentWillReceiveProps() {
    this.props.fetchBookshelves();
  }

  toggleAddShelfForm() {
    this.setState({ showAddShelfForm: true });
  }

  fetchUserBooks() {
    return this.props.fetchUserBooks(this.props.currentUser.id).then(this.setState({ selectedBookshelf: ""}));
  }

  filterBooks(bookshelf) {
    return () => {
      return this.props.fetchBookshelfBooks(bookshelf.id).then(() => { this.setState({ selectedBookshelf: bookshelf.title}); });
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
      form = "";
    }
    const bookshelfIndexItems = this.props.bookshelves.map((bookshelf) => {
      return (
        <li key={bookshelf.id}>
          <button className="bookshelf-filter-link" onClick={this.filterBooks(bookshelf)}>
            {bookshelf.title} ({bookshelf.books.length})
          </button>
        </li>
      );
    });

    const colon = (this.state.selectedBookshelf === "") ? "" : ": ";
    let bookshelfHeaderDescription;
    if (this.state.selectedBookshelf === "") {
      bookshelfHeaderDescription = (<span></span>);
    } else {
      bookshelfHeaderDescription = (
        <span className="bookshelf-header-description">:&nbsp;
          <span>{this.state.selectedBookshelf}</span>
          <button className="switch-to-all-books" onClick={this.fetchUserBooks}>X</button>
        </span>
      );
    }

    return(
      <div className="my-books-page">
        <div className="my-books-content">

          <header className="bookshelf-title-header">My Books{bookshelfHeaderDescription}</header>
          <section className="books-filtered-body">
            <nav className="sidebar">
              <h3 className="bookshelves-index-header">bookshelves&nbsp;</h3>
              <Link to="shelves" className="edit-bookshelves-button">(edit)</Link>
              <ul>
                <li><button onClick={this.fetchUserBooks} className="bookshelf-filter-link">all</button></li>
                <li><button className="bookshelf-filter-link">read</button></li>
                <li><button className="bookshelf-filter-link">currently-reading</button></li>
                <li><button className="bookshelf-filter-link">to-read</button></li>
                {bookshelfIndexItems}
              </ul>
              <button onClick={this.toggleAddShelfForm}>Add Shelf</button>
              {form}
            </nav>
            <MyBooksIndexContainer />
          </section>

        </div>
      </div>
    );
  }

}
