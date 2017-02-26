import React from 'react';
import ReactDOM from 'react-dom';

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

  render() {
    return(
      <div className="about">
        <button onClick={this.props.toggleAbout} className="close-about">X</button>
        <p>Greatreads is a clone of Goodreads cloned by Avital Drucker, graduate of App Academy in New York.</p>
        <figure className="icon-container">
          <a href="https://www.linkedin.com/in/avitaldrucker"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="https://www.github.com/avitaldrucker"><i className="fa fa-github" aria-hidden="true"></i></a>
        </figure>
      </div>
    );
  }

};
