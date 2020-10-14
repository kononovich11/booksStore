import React from 'react';
import {BooksServiceConsumer} from '../books-service-context';

const withBooksService = () => (Wrapped) => {
  return (props) => {
    return (
      <BooksServiceConsumer>
        {
          (booksStoreService) => {
            return (
              <Wrapped {...props} 
                        booksStoreService={booksStoreService}/>
            );
          }
        }
      </BooksServiceConsumer>
    );
  }
};

export default withBooksService;