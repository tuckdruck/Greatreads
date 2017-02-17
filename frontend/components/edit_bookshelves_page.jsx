import React from 'react';
import Header from './header';
import AddShelfFormContainer from './add_shelf_form_container';
import EditBookshelvesIndexContainer from './edit_bookshelves_index_container';
import Footer from './footer';

const EditBookshelvesPage = (props) => {
  return(
    <div>
      <Header />
      <div className="my-books-content edit-bookshelves-body">
        <h1>Edit Bookshelves</h1>
        <AddShelfFormContainer className="for-edit-page"/>
        <EditBookshelvesIndexContainer />
      </div>
      <Footer />
    </div>
  );
};


export default EditBookshelvesPage;
