import React from 'react';
import HeaderContainer from '../header_container';
import AddShelfFormContainer from '../add_shelf_form_container';
import EditBookshelvesIndexContainer from './edit_bookshelves_index_container';
import Footer from '../footer';


const EditBookshelvesPage = (props) => {
  return(
      <div className="my-books-pg edit-bookshelves-main">
        <h1>Edit Shelves</h1>
        <div className="edit-bookshelves-forms">
          <AddShelfFormContainer className="for-edit-page"/>
          <EditBookshelvesIndexContainer />
        </div>
      </div>
  );
};


export default EditBookshelvesPage;
