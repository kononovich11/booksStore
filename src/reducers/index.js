const initialState = {
  books: [],
  loading: true,
  error: null,
  items: [
    {
      id: 1,
      name: 'book1',
      count: 2,
      total: 40,
    },
    {
      id:  2,
      name: 'book2',
      count: 3,
      total: 70,
    }
  ],
  orderTotal: 120,
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

    default: 
    return state;
  }
};

export default reducer;
