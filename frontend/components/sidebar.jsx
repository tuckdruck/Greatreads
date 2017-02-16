import React from 'react';
import BookshelfIndexContainer from './bookshelf_index_container';

const Sidebar = props => {
  return(
    <div>
      <h1>bookshelves</h1>
      <ul>
        <li>all</li>
        <li>read</li>
        <li>currently-reading</li>
        <li>to-read</li>
      </ul>
      <BookshelfIndexContainer />
      <span>Add shelf button!</span>
    </div>
  );
};

export default Sidebar;
