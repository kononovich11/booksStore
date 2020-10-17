const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  }
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  }
};

export const bookAddToTable = (bookId) => {
  return {
    type: 'BOOK_ADD_TO_TABLE',
    payload: bookId,
  }
};

export const bookDeleteFromTable = (bookId) => {
  return {
    type: 'BOOK_DELETE_FROM_TABLE',
    payload: bookId,
  };
}

export const decreaseItem = (bookId) => {
  return {
    type: 'DECREASE_ITEM',
    payload: bookId,
  }
} 

const fetchBooks = (booksStoreService, dispatch) => () => {
  dispatch(booksRequested());
  booksStoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error => dispatch(booksError(error))));
}

export {
  fetchBooks
}