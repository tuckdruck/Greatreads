import React from 'react';
import { connect } from 'react-redux';
import { createBookshelf } from '../actions/bookshelf_actions';

class AddShelfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shelfTitle: "", errors: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateShelfTitle = this.updateShelfTitle.bind(this);
    this.setErrors = this.setErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookshelf = { title: this.state.shelfTitle };

    if (this.props.addBookshelfToBook) {
      return this.props.createBookshelf(bookshelf).then((action) => {
        return this.props.addBookshelfToBook(action.bookshelf.id, true);
      });
    }
    else {
      return this.props.createBookshelf(bookshelf, this.props.currentUser.id)
        .then(() => { this.setState({ shelfTitle: ""}); })
        .fail((errors) => { this.setErrors(errors) });
    }
  }

  setErrors(errors) {
    return () => {
      // errors = errors.responseJSON;
      const errorsArray = Object.keys(errors.responseJSON).map((prop) => { return `${prop} ${errors.responseJSON[prop]}`; });
      console.log(errorsArray);
      return this.setState({ errors: errorsArray});
    };
  }

  updateShelfTitle(e) {
    this.setState({ shelfTitle: e.currentTarget.value });
  }

  render() {
    const additionalClassName = (this.props.className) ? ` ${this.props.className}` : "";
    return(
      <form className={`add-shelf${additionalClassName}`} onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.shelfTitle} onChange={this.updateShelfTitle}/>
        <button className="add-shelf">add</button>
        <span>{this.state.errors}</span>
      </form>

    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBookshelf: (bookshelf, userId) => { return dispatch(createBookshelf(bookshelf, userId)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddShelfForm);
