import React from 'react';
import { connect } from 'react-redux';
import { updateStatus } from '../../actions/status_actions';

class DateReadForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { date: "1/22/2017" };
    this.updateDate = this.updateDate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let dateString = (new Date(this.state.date)).toDateString();
    let date_read = dateString.slice(4, dateString.length);

    this.props.updateStatus({
      status_id: this.props.book.status.id,
      book_id: this.props.book.id,
      status: this.props.book.status.status,
      date_read: date_read
    });
  }

  updateDate(e) {
    this.setState({ date: e.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="date" name="date_read" value={this.state.date} onChange={this.updateDate}/>
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
