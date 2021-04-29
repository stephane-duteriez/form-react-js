import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyNavbar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

const MyNavbar = () => (
  <div className={styles.MyNavbar} data-testid="MyNavbar">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Meme generator
      </Navbar.Brand>
      <Nav className="mr-auto" activeKey="/thumbnail">
        <Nav.Item>
          <LinkContainer to="/thumbnail">
           <Nav.Link>Thumbnail</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/editor">
          <Nav.Link >Nouveau meme</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </Navbar>
  </div>
);

MyNavbar.propTypes = {};

MyNavbar.defaultProps = {};

export default MyNavbar;
