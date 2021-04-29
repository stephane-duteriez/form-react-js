import React from 'react';
import PropTypes from 'prop-types';
import styles from './LayoutFlow.module.scss';

const LayoutFlow = (props) => (
  <div className={styles.LayoutFlow} data-testid="LayoutFlow">
    {props.children?props.children:""}
  </div>
);

LayoutFlow.propTypes = {
  children : PropTypes.array.isRequired
};

LayoutFlow.defaultProps = {
  children : []
};

export default LayoutFlow;
