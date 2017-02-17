import { updateBookshelf, deleteBookshelf, fetchBookshelves } from '../actions/bookshelf_actions';
import { connect } from 'react-redux';
import bookshelvesArray from '../selectors/bookshelves_selector';
import React from 'react';
import EditBookshelvesIndexItem from './edit_bookshelves_index_item';

class EditBookshelvesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookshelves();
  }

  render() {
    const bookshelves = this.props.bookshelves.map((bookshelf) => {
      return(<li key={bookshelf.id}><EditBookshelvesIndexItem key={bookshelf.id} bookshelf={bookshelf}/></li>);
    });

    return(<ul>{bookshelves}</ul>);
  }

}


const mapStateToProps = state => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookshelves: () => { return dispatch(fetchBookshelves()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBookshelvesIndex);
