import React from 'react';
import Header from './header';
import AddShelfFormContainer from './add_shelf_form_container';
import EditBookshelvesIndexContainer from './edit_bookshelves_index_container';
import Footer from './footer';

const EditBookshelvesPage = (props) => {
  return(
    <div>
      <Header />
      <AddShelfFormContainer />
      <EditBookshelvesIndexContainer />
      <Footer />
    </div>
  );
};

export default EditBookshelvesPage;
