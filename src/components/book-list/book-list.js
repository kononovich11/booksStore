import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item';
import {withBooksService} from '../hoc';
import {booksLoaded} from '../../actions';
import compose from '../../utils';
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const {booksStoreService} = this.props;
    const data = booksStoreService.getBooks();
    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;
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

const mapStateToProps = ({books}) => {
  return {books};
};

const mapDispatchToProps = {
  booksLoaded
};


export default compose(
  withBooksService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(BookList);

