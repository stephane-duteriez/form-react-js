import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import { Navbar } from 'react-bootstrap';

const MyNavbar = () => (
  <div className={styles.myNavbar} data-testid="myNavbar">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Navbar>
  </div>
);

MyNavbar.propTypes = {};

MyNavbar.defaultProps = {};

export default MyNavbar;
