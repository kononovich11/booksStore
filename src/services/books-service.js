export default class BooksStoreService {
  getBooks() {
    return [
      { id: 1, 
        title: 'Production-Ready',
        author: 'Susan J.',
        price: 52,
        coverImage: 'https://uploads.sitepoint.com/wp-content/uploads/2017/03/1488480428eloquent-js.jpg'},
      { id: 2,
        title: 'Release It!',
        author: 'Michael T.',
        price: 49,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/713elKMGFkL.jpg'} , 
    ];
  }
}