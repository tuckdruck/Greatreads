import React from 'react';
import { connect } from 'react-redux';
import { createBookshelf } from '../actions/bookshelf_actions';
import { receiveErrors } from '../actions/error_actions';

class AddShelfForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { shelfTitle: "", errors: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateShelfTitle = this.updateShelfTitle.bind(this);
  }

  setErrors(errors) {
    this.setState({ errors: this.props.errors});
  }

  addBookshelfToBook(bookshelf) {
    const { createBookshelf, addBookshelfToBook } = this.props;

    return createBookshelf(bookshelf)
      .then((action) => (addBookshelfToBook(action.bookshelf.id, true)))
      .fail(() => (this.setErrors()));
  }

  createBookshelf(bookshelf) {
    const { createBookshelf, currentUser } = this.props;

    return createBookshelf(bookshelf, currentUser.id)
      .then(() => { this.setState({ shelfTitle: ""}); })
      .fail(() => (this.setErrors()));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({errors: []});
    const bookshelf = { title: this.state.shelfTitle };

    if (this.props.addBookshelfToBook) {
      this.addBookshelfToBook(bookshelf);
    }
    else { this.createBookshelf(bookshelf); }
  }

  componentWillReceiveProps() {
    if (this.props.errors.length < 1) {
      this.setState({ errors: []});
    }
  }

  updateShelfTitle(e) {
    this.setState({ shelfTitle: e.currentTarget.value });
  }

  formInput(className) {
    return(
      <input
        type="text"
        className={className}
        value={this.state.shelfTitle}
        onChange={this.updateShelfTitle}/>
    );
  }

  form() {
    const fullClassName = `add-shelf ${this.props.className}`;

    return(
      <form className={fullClassName} onSubmit={this.handleSubmit}>
          {this.formInput(fullClassName)}
          <button className="add-shelf">add</button>
      </form>
    );
  }

  errors() {
    if (this.state.errors.length > 0) {
      return(
        <div className={`add-shelf-errors ${this.props.className}`}>
          {this.state.errors}
        </div>
      );
    } else { return ""; }
  }

  formattedErrors() {
    const { className } = this.props;

    return(
      <div className={`errors-container ${className}`}>{this.errors()}
      </div>
    );
  }


  render() {
    return(<div>{this.formattedErrors()}{this.form()}</div>);
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBookshelf: (bookshelf, userId) => {
      return dispatch(createBookshelf(bookshelf, userId));
    },
    clearErrors: () => { return dispatch(receiveErrors([])); }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddShelfForm);
