const initialState = {
  books: [],
  loading: true,
  error: null,
  items: [],
  orderTotal: 120,
};

const updateBracket = (items, item, index) => {
  if(item.count === 0) {
    return [
      ...items.slice(0, index),
      ...items.slice(index + 1),
    ];
  }

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

const updateItem = (book, item = {}, quantity) => {
  const {
    id = book.id, 
    count = 0, 
    title = book.title, 
    total = 0} = item;

  return {
    id,
    count: count + quantity,
    title,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {books, items} = state;
  const book = books.find((book) => book.id === bookId);
  const itemIndex = items.findIndex(({id}) => id === bookId);
  const item = items[itemIndex];

  const newItem = updateItem(book, item, quantity);
    return {
      ...state,
      items: updateBracket(items, newItem, itemIndex),
    };
}

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
      return updateOrder(state, action.payload, 1);
     
    case 'BOOK_DELETE_FROM_TABLE':
      const item = state.items.find((item) => item.id === action.payload);
      return updateOrder(state, action.payload, -item.count);
 
    case 'DECREASE_ITEM': 
      return updateOrder(state, action.payload, -1);
       
    default: return state;
  }
};

export default reducer;
