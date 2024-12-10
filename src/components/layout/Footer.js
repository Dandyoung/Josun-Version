// src/components/layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-5 pb-5 footer">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <small className="small">
              <span>&copy; 2024 all rights reserved - </span> JOSUN VERSION
            </small>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="list-inline small">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Legal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;