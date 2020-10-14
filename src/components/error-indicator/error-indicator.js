import React from 'react';
import './error-indicator.css';
import ErrorImg from './system-error.svg';

const ErrorIndicator = () => {
  return (
    <div className="indicator-container">
      <img className="error-indicator" 
           src={ErrorImg} 
           href="error-indicator"/>
      Sorry, app has error
    </div>
  );
}

export default ErrorIndicator;