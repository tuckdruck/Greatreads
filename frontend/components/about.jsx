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
        <p>Greatreads is a book app inspired by Goodreads and created by Avital Drucker, a web developer based in New York.</p>
        <p className="email">avitaldrucker@gmail.com</p>
        <figure className="icon-container">
          <a href="http://www.avitaldrucker.com"><i className="fa fa-globe" aria-hidden="true"></i></a>
          <a href="http://www.github.com/avitaldrucker"><i className="fa fa-github" aria-hidden="true"></i></a>
          <a href="http://www.linkedin.com/in/avitaldrucker"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </figure>
      </div>
    );
  }

};
