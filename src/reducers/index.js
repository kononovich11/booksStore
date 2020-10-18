import updateBookList from './book-list';
import updateShoppingBasket from './shopping-basket';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingBasket: updateShoppingBasket(state, action)
  }
};

export default reducer;
