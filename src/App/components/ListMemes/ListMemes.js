import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import styles from './ListMemes.module.scss';
import MemeViewer from '../MemeViewer/MemeViewer';
import {REST_ADR, REST_ENDPOINT} from '../../configue/configue';
import LayoutFlow from '../LayoutFlow/LayoutFlow';

const initialState = {
  name : '',
  text:{x:0,y:0,value:'', underline:false, bold:false, color:"#555555"},
  imageId:0,
  font:"Arial"
};
const ListMemes = (props) => {
  const [memes, setmemes] = useState([])

  useEffect(() => {
    fetch(`${REST_ADR}${REST_ENDPOINT.MEMES}`)
    .then(f=>f.json(), f=>[])
    .then(arr=>{
      setmemes(arr);
      return arr;
    })
  }, []);

  return (
    <div className={styles.ListMemes} data-testid="ListMemes">
      <LayoutFlow>
        {memes.map((meme, i)=><MemeViewer key={`thunder_${i}`} currentMeme={{...meme, image:props.images.find((img)=>img.id===meme.imageId)}}></MemeViewer>)}

      </LayoutFlow>
    </div>
  );
}

ListMemes.propTypes = {};

ListMemes.defaultProps = {};

export default ListMemes;
