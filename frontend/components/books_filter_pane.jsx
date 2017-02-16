import React from 'react';
import AddShelfFormContainer from './add_shelf_form_container';
import MyBooksIndexContainer from './my_books_index_container';

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

  toggleAddShelfForm() {
    this.setState({ showAddShelfForm: true });
  }

  fetchUserBooks() {
    return this.props.fetchUserBooks(this.props.currentUser.id).then(this.setState({ selectedBookshelf: ""}));
  }

  filterBooks(bookshelf) {
    return () => {
      this.props.fetchBookshelfBooks(bookshelf.id).then(() => { this.setState({ selectedBookshelf: bookshelf.title})})
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
          <button onClick={this.filterBooks(bookshelf)}>
            {bookshelf.title}
          </button>
        </li>
      );
    });

    const colon = (this.state.selectedBookshelf === "") ? "" : ":";

    return(
      <div className="my-books-body">

        <header className="bookshelf-title-header">My Books{colon} {this.state.selectedBookshelf}</header>
        <section className="books-filtered-body">
          <nav>
            Bookshelves
            <ul>
              <li><button onClick={this.fetchUserBooks}>all</button></li>
              <li>read</li>
              <li>currently-reading</li>
              <li>to-read</li>
            </ul>
            <ul>
              {bookshelfIndexItems}
            </ul>
            <button onClick={this.toggleAddShelfForm}>Add Shelf</button>
            {form}
          </nav>
          <MyBooksIndexContainer />
        </section>

      </div>
    );
  }

}
