// import React from 'react';
//
// export default class BookshelfIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.filterBooks = this.filterBooks.bind(this);
//   }
//
//   componentDidMount() {
//     this.props.fetchBookshelves();
//   }
//
//   filterBooks(bookshelfId) {
//     return () => {
//       this.props.fetchBookshelfBooks(bookshelfId);
//     };
//   }
//
//   render() {
//     const bookshelfIndexItems = this.props.bookshelves.map((bookshelf) => {
//       return (
//         <li>
//           <button onClick={this.filterBooks(bookshelf.id)}>
//             {bookshelf.title}
//           </button>
//         </li>
//       );
//     });
//
//     return(
//       <ul>
//         {bookshelfIndexItems}
//       </ul>
//     );
//   }
// }
