const initialState = {
  books: [],
  loading: true,
  error: null,
  items: [],
  orderTotal: 120,
};

const updateBracket = (items, item, index) => {
  if(index === -1) {
    return [
      ...items,
      item
    ];
  }

  return [
    ...items.slice(0, index),
    item,
    ...items.slice(index + 1),
  ];
};

const updateItem = (book, item = {}) => {
  const {
    id = book.id, 
    count = 0, 
    title = book.title, 
    total = 0} = item;

  return {
    id,
    count: count + 1,
    title,
    total: total + book.price,
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS_REQUEST': 
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_SUCCESS': 
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
      case 'BOOK_ADD_TO_TABLE':
        const bookId = action.payload;
        const book = state.books.find((book) => book.id === bookId);
        const itemIndex = state.items.findIndex(({id}) => id === bookId);
        const item = state.items[itemIndex];

        const newItem = updateItem(book, item);
          return {
            ...state,
            items: updateBracket(state.items, newItem, itemIndex),
          };
          
    default: 
    return state;
  }
};

export default reducer;
