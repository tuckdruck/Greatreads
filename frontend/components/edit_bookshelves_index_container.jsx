import { updateBookshelf, deleteBookshelf } from '../actions/bookshelf_actions';
import { connect } from 'react-redux';

class EditBookshelvesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBookshelf = this.deleteBookshelf.bind(this);
  }

  render() {
    const bookshelves = this.props.bookshelves.map((bookshelf) => {
      let bookshelfEntry;
      if (this.state.showForm) {
      } else {
        bookshelfEntry = (
          <button>{}</button>
        )
      }


      return(
        <li>
          <EditBookshelvesIndexItem />
        </li>
      );
    });

    return(
      <ul>

      </ul>
    );
  }
}




const mapStateToProps = state => {
  return {
    bookshelves: state.bookshelves,
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBookshelf: (bookshelf, userId) => { return dispatch(updateBookshelf(bookshelf, userId)); },
    deleteBookshelf: (bookshelfId, userId) => { return dispatch(deleteBookshelf(bookshelfId, userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBookshelvesIndex);
