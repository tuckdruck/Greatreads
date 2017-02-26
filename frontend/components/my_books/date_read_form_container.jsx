import React from 'react';
import { connect } from 'react-redux';
import { updateStatus } from '../../actions/status_actions';
import ReactDOM from 'react-dom';

class DateReadForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    let dateRead;
    if (this.props.book.status.date_read) {
      dateRead = this.props.book.status.date_read;
    } else {
      dateRead = "";
    }

    this.state = { date: dateRead };
    this.updateDate = this.updateDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick(e) {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.toggleDateReadForm();
    }
  }

  handleSubmit(e) {
    this.props.toggleDateReadForm();
    e.preventDefault();

    this.props.updateStatus({
      status_id: this.props.book.status.id,
      book_id: this.props.book.id,
      status: this.props.book.status.status,
      date_read: this.state.date
    });
  }

  updateDate(e) {
    this.setState({ date: e.target.value });
  }

  render() {
    return(
      <form className="date-read" onSubmit={this.handleSubmit}>
        <input type="date" name="date_read" value={this.state.date} onChange={this.updateDate}/>
        <div>
          <button className="save-date-read">Save</button>&nbsp;&nbsp;
          <button className="cancel-date-form" onClick={() => { this.props.toggleDateReadForm()}}>cancel</button>
        </div>

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
