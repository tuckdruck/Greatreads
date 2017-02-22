import { updateBookshelf, deleteBookshelf, fetchBookshelves } from '../../actions/bookshelf_actions';
import { connect } from 'react-redux';
import { bookshelvesArray } from '../../selectors/bookshelves_selector';
import React from 'react';
import EditBookshelvesIndexItemContainer from './edit_bookshelves_index_item_container';

class EditBookshelvesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookshelves(this.props.currentUser.id);
  }

  render() {
    if (this.props.loading.bookshelvesLoading) {
      return(<div></div>);
    }
    else {
      const bookshelves = this.props.bookshelves.map((bookshelf) => {
        return(
          <li key={bookshelf.id}>
            <EditBookshelvesIndexItemContainer key={bookshelf.id} bookshelf={bookshelf}/>
          </li>
        );
      });

      return(<ul className="edit-bookshelves-index">{bookshelves}</ul>);
    }

  }

}


const mapStateToProps = state => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves),
    currentUser: state.session.currentUser,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookshelves: (userId) => { return dispatch(fetchBookshelves(userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBookshelvesIndex);
