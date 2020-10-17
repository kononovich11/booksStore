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

const deleteItem = (state, itemIndexDel) => {
  return  {
    ...state,
    items: [
      ...state.items.slice(0, itemIndexDel),
      ...state.items.slice(itemIndexDel + 1)
    ],
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
     
    case 'BOOK_DELETE_FROM_TABLE':
      const bookDeletedId = action.payload;
      const itemIndexDel = state.items.findIndex(({id}) => id === bookDeletedId);
  
     return deleteItem(state, itemIndexDel);

    case 'DECREASE_ITEM': 
      const decreaseId = action.payload;
      const itemDecrease = state.items.find((item) => item.id === decreaseId);
      const itemIndexDec = state.items.findIndex(({id}) => id === decreaseId);
      const decBook = state.books.find((book) => book.id === decreaseId);
      console.log(decBook);
      
      let {id, count, title, total} = itemDecrease;
      const newDecItems = {
        id,
        count : count - 1,
        title,
        total : total - decBook.price
      };
      if(itemDecrease.count === 1) {
        return deleteItem(state, itemIndexDec);
      } 
      else {
       return  {
           ...state,
           items: [
             ...state.items.slice(0, itemIndexDec),
             newDecItems,
             ...state.items.slice(itemIndexDec + 1)
           ],
         };
      }

          
    default: return state;
  }
};

export default reducer;
