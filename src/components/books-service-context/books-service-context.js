import React from 'react';

const {
  Provider: BooksServiceProvider,
  Consumer: BooksServiceConsumer,
} = React.createContext();

export {
  BooksServiceProvider,
  BooksServiceConsumer,
};