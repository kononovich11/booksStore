export default class BooksStoreService {
  getBooks() {
    return [
      { id: 1, 
        title: 'Production-Ready',
        author: 'Susan J.'},
      { id: 2,
        title: 'Release It!',
        author: 'Michael T.'} , 
    ];
  }
}