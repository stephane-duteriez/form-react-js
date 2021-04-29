import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import styles from './ListMemes.module.scss';
import MemeViewer from '../MemeViewer/MemeViewer';
import {REST_ADR, REST_ENDPOINT} from '../../configue/configue';
import LayoutFlow from '../LayoutFlow/LayoutFlow';
import store, {initialState, REDUCER_ACTIONS} from '../../store/store';
import { Link } from 'react-router-dom';

const ListMemes = (props) => {
  const [memes, setmemes] = useState([])

  useEffect(() => {
    setmemes(store.getState().memes);
    store.subscribe(()=> {
      setmemes(store.getState().memes);
    })
  }, []);

  return (
    <div className={styles.ListMemes} data-testid="ListMemes">
      <LayoutFlow>
        {memes.map((meme, i)=> <Link to={'/editor/' + meme.id} key={`thunder_${i}`}>
          <MemeViewer currentMeme={{...meme, image:props.images.find((img)=>img.id===meme.imageId)}}></MemeViewer>
        </Link>
        )}
      </LayoutFlow>
    </div>
  );
}

ListMemes.propTypes = {};

ListMemes.defaultProps = {};

export default ListMemes;
