import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BooksStoreService from './services/books-service';
import {BooksServiceProvider} from './components/books-service-context';

import store from './store';

const booksStoreService = new BooksStoreService();



ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BooksServiceProvider value={booksStoreService}>
        <Router>
          <App/>
        </Router>
      </BooksServiceProvider>
    </ErrorBoundry>
  </Provider>, 
document.getElementById('root'));