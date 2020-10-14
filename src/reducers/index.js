const initialState = {
  books: [
    { id: 1, 
      title: 'Production-Ready',
      author: 'Susan J.'},
    { id: 2,
      title: 'Release It!',
      author: 'Michael T.'} , 
  ],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOOKS_LOADED': 
    return {
      books: action.payload,
    };
    default: 
    return state;
  }
};

export default reducer;