import React from 'react';
import ReactDOM from 'react-dom';
import Icons from './icons';

export default class About extends React.Component {

  constructor(props) {
    super(props);
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
      this.props.toggleAbout();
    }
  }

  appDescription() {
    return(
      <p>
      Greatreads is a book app inspired by Goodreads and created&nbsp;
      by Avital Drucker, a web developer based in New York.
      </p>
    );
  }

  closeAboutButton() {
    return(
      <button onClick={this.props.toggleAbout} className="close-about">
        X
      </button>
    );
  }

  render() {
    return(
      <div className="about">
        {this.closeAboutButton()}
        {this.appDescription()}
        <p className="email">avitaldrucker@gmail.com</p>
        <figure className="icon-container">{Icons()}</figure>
      </div>
    );
  }

};
