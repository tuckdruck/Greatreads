import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';

export default class BookshelfIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookshelves();
  }

  render() {
    const bookshelfIndexItems = this.props.bookshelves.map((bookshelf) => {
      return (<BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} fetchBookshelfBooks={this.props.fetchBookshelfBooks}/>);
    });
    return(
      <ul>
        {bookshelfIndexItems}
      </ul>
    );
  }
}
