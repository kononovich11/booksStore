import React from 'react';
import BookList from '../book-list';
import ShoppingTable from '../shopping-table';

const HomePage = () => {
  return(
    <div>
      <BookList/>
      <ShoppingTable/>
    </div>
  );
};

export default HomePage;