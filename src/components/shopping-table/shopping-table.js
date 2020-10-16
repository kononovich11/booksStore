import React from 'react';
import {connect} from 'react-redux';
import './shopping-table.css';

const ShoppingTable = ({items, orderTotal, onIncrease, onDecrease, onDelete}) => {

  const renderRow = (item, index) => { 
    const {id, title, count, total} = item;
    return (
      <tr key ={id}>
        <td>{++index}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            className="btn btn-outline-danger"
            onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o"/>
          </button>
          <button 
            className="btn btn-outline-success"
            onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle"/>
          </button>
          <button 
            className="btn btn-outline-warning"
            onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle"/>
          </button>
        </td>
      </tr>
    )
  };

  return (
    <div className="shopping-table">
      <h2>Your orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(renderRow)} 
        </tbody>
      </table>

      <div className="total">
        Total: ${orderTotal}
      </div>
    </div>
  );
};

const mapStateToProps = ({items, orderTotal}) => {
  return {
    items,
    orderTotal,
  }
};

const mapDispatchToprops = (dispatch) => {
  return {
    onIncrease: () => {
      console.log(`Increase `);
    },
    onDecrease: () => {
      console.log(`Decrease `);
    },
    onDelete: () => {
      console.log(`Delete`);
    },
  }
};

export default connect(mapStateToProps, mapDispatchToprops)(ShoppingTable);