import './style.css';
import React from 'react';

const choix = () => {
  return (
    <div className="container">
      <h1>Join as a client or worker</h1>
      <div className="options">
        <div className="option">
          <h2>I'm a client, hiring for </h2>
          <button>Create Account</button>
        </div>
        <div className="option">
          <h2>I'm a worker, looking for work</h2>
          <button>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default choix;