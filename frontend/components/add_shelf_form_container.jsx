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

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({errors: []});
    const bookshelf = { title: this.state.shelfTitle };
    if (this.props.addBookshelfToBook) {
      return this.props.createBookshelf(bookshelf).then((action) => {
        return this.props.addBookshelfToBook(action.bookshelf.id, true);
      }).fail(() => { this.setState({ errors: this.props.errors}); });
    }
    else {
      return this.props.createBookshelf(bookshelf, this.props.currentUser.id)
        .then(() => { this.setState({ shelfTitle: ""}); })
        .fail(() => { this.setState({ errors: this.props.errors}); });
    }
  }

  componentWillReceiveProps() {
    if (this.props.errors.length < 1) {
      this.setState({ errors: []});
    }
  }

  updateShelfTitle(e) {
    this.setState({ shelfTitle: e.currentTarget.value });
  }

  render() {
    const additionalClassName = (this.props.className) ? ` ${this.props.className}` : "";
    let errors;

    if (this.state.errors.length > 0) {
      errors = (
        <div className={`add-shelf-errors ${this.props.fromFieldsForm ? "from-fields-form" : ""}`}>{this.state.errors}</div>
      );
    } else {
      errors = "";
    }

    let errorsforEditPage;
    let errorsforMyBooksSidebar;
    let errorsforFieldsForm;

    if (this.props.className) {
      errorsforEditPage = (<div className="errors-container edit">{errors}</div>);
      errorsforMyBooksSidebar = "";
    }
    else if (this.props.fromFieldsForm) {
      errorsforEditPage = (<div className="errors-container">{errors}</div>)
      errorsforMyBooksSidebar = "";
    } else {
      errorsforEditPage = "";
      errorsforMyBooksSidebar = (<div className="errors-container">{errors}</div>);
    }

    let inputClassName;
    if (this.props.fromFieldsForm) {
      inputClassName = "from-fields-form";
    } else {
      inputClassName = "";
    }
    return(
      <div>
        {errorsforEditPage}
        <form className={`add-shelf ${additionalClassName} ${inputClassName}`} onSubmit={this.handleSubmit}>
            <input type="text" className={inputClassName} value={this.state.shelfTitle} onChange={this.updateShelfTitle}/>
            <button className="add-shelf">add</button>
        </form>
        {errorsforMyBooksSidebar}
      </div>
    );
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
    createBookshelf: (bookshelf, userId) => { return dispatch(createBookshelf(bookshelf, userId)); },
    clearErrors: () => { return dispatch(receiveErrors([])); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddShelfForm);
