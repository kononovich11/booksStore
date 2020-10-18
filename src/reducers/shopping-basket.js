const updateShoppingBasket = (state, action) => {
  if(state === undefined) {
    return {
      items: [],
      orderTotal: 0,
    };
  };

  switch(action.type) {
    case 'BOOK_ADD_TO_TABLE':
      return updateOrder(state, action.payload, 1);
     
    case 'BOOK_DELETE_FROM_TABLE':
      const item = state.shoppingBasket.items.find((item) => item.id === action.payload);
      return updateOrder(state, action.payload, -item.count);
 
    case 'DECREASE_ITEM': 
      return updateOrder(state, action.payload, -1);
    
    default: return state.shoppingBasket;
  }
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
  const {bookList: {books}, shoppingBasket: {items}} = state;
  const book = books.find((book) => book.id === bookId);
  const itemIndex = items.findIndex(({id}) => id === bookId);
  const item = items[itemIndex];

  const newItem = updateItem(book, item, quantity);
    return {
      items: updateBracket(items, newItem, itemIndex),
      orederTotal: 0,
    };
}

export default updateShoppingBasket;