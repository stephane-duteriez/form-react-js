import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox="0 0 4000 6000">
    <image x={0} y={0} href={props.currentMeme.image} />
    <text x={props.currentMeme.text.x} y={props.currentMeme.text.y + 200} className={styles.text} style={{
          fill : ( props.currentMeme.text.color || "#FFFFFF"),
          textDecoration : (props.currentMeme.text.underliner?'underline': 'none' ),
          fontWeight: (props.currentMeme.text.bold?'bold': 'normal' ),
          fontFamily: props.currentMeme.text.font
          }}>{props.currentMeme.text.value}</text>
  </svg>
);

MemeViewer.propTypes = {};

MemeViewer.defaultProps = {};

export default MemeViewer;
