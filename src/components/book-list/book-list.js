import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item';
import {withBooksService} from '../hoc';
import {booksLoaded, booksRequested, booksError} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'; 
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error} = this.props;

    if(loading) {
      return <Spinner/>;
    }

    if(error) {
      return <ErrorIndicator/>;
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

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {booksStoreService} = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      booksStoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error => dispatch(booksError(error))));
    }
  };
};


export default compose(
  withBooksService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(BookList);

