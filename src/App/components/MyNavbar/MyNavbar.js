import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyNavbar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

const MyNavbar = () => (
  <div className={styles.MyNavbar} data-testid="MyNavbar">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Meme generator
      </Navbar.Brand>
      <Nav className="mr-auto" activeKey="/thumbnail">
        onSelect={(selectedKey)=>console.log(selectedKey)}
        <Nav.Link href="/thumbnail">Thumbnail</Nav.Link>
        <Nav.Link href="/editor">Nouveau meme</Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

MyNavbar.propTypes = {};

MyNavbar.defaultProps = {};

export default MyNavbar;
