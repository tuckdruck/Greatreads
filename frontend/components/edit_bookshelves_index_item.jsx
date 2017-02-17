import React from 'react';

class EditBookshelvesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showForm: false};
  }

  deleteBookshelf(bookshelf) {
    return () => {
      this.props.deleteBookshelf(bookshelfId, this.props.userId);
    };
  }
}
