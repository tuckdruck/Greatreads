import React from 'react';
import { connect } from 'react-redux';
import { updateStatus } from '../../actions/status_actions';

class DateReadForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.updateStatus({
      status_id: this.props.book.status.id,
      book_id: this.props.book.id,
      status: this.props.book.status.status,
      date_read: e.currentTarget.date_read
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="date" name="date_read"/>
        <button>Submit</button>
      </form>
    );

  }

}

const mapDispatchToProps = dispatch => {
  return {
    updateStatus: (info) => { return dispatch(updateStatus(info)); }
  };
};

export default connect(null, mapDispatchToProps)(DateReadForm);
//get props for updateStatus, and the book
