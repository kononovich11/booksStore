import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import {connect} from 'react-redux';

class BookList extends Component {
  render() {
    const {books} = this.props;
    return (
      <ul>
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

export default connect(mapStateToProps)(BookList);
