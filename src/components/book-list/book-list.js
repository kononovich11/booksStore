import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item';
import {withBooksService} from '../hoc';
import {booksLoaded} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const {booksStoreService, booksLoaded} = this.props;
    booksStoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const {books, loading} = this.props;

    if(loading) {
      return <Spinner/>
    }

    return (
      <ul className="book-list">
        {books.map((objBook) => {
         return(
         <li key={objBook.id}>
            <BookListItem book={objBook}/>
          </li>
         ); 
        })}
      </ul>
    );
  }
};

const mapStateToProps = ({books, loading}) => {
  return {books, loading};
};

const mapDispatchToProps = {
  booksLoaded
};


export default compose(
  withBooksService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(BookList);

