import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

const Layout = (props) => (
  <div className={styles.Layout} data-testid="Layout">
    <div className={styles.left}>
      {props.children[0]}
    </div>
    <div className={styles.right}>
      {props.children[1]}
    </div>
  </div>
);

Layout.propTypes = {
  children : PropTypes.array.isRequired
};

Layout.defaultProps = {children:[<div>Oublie elem1</div>, <div>Oublie elem2</div>]};

export default Layout;
