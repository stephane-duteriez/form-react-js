import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../Button/Button';
import store, {initialState, REDUCER_ACTIONS} from '../../store/store';
import { withRouter } from 'react-router-dom'

const MemeForm = (props) => {
  const [formContent, setformContent] = useState(initialState.currentMeme); 
  const [images, setImages] = useState(initialState.images);
  useEffect(() => {
    setImages(store.getState().images)
    store.subscribe(()=>{
      setImages(store.getState().images);
      setformContent(store.getState().currentMeme);
    })
  }, []);

  useEffect(() => {
    if (undefined!==props.match.params.id) {
      store.dispatch({type:REDUCER_ACTIONS.SET_CURRENT_MEME_ID, value:parseInt(props.match.params.id, 10)});
    }
  }, [store.getState().images, store.getState().memes]);

  return (
    <form className={styles.MemeForm} data-testid="MemeForm">
    <div className={styles.container}>
      <div className={styles.center}>
        <input type="text" placeholder="nom du meme" id="name"
        value={formContent.nom}
          onChange={(evt)=>{
            setformContent({...formContent, nom:evt.target.value})
          }}
        />
      </div>
      <div className={styles.text}>
          <div className={styles.center}>
          <input type="text" value={formContent.text.value} id="text" placeholder="Text"
          onChange={(evt)=>{
            setformContent({...formContent, text:{...formContent.text,value:evt.target.value}});
          }}></input>
          </div>

        <div className={styles.inlineContainer, styles.center}>
          <input  type="range" min="1" max="6000" value={formContent.x} placeholder="X"
            onChange={(evt)=>{
              setformContent({...formContent, text:{...formContent.text, x:parseInt(evt.target.value)}});
            }}></input>
          <input  type="range" min="1" max="6000" value={formContent.y} placeholder="Y"
            onChange={(evt)=>{
              setformContent({...formContent, text:{...formContent.text, y:parseInt(evt.target.value)}});
            }}></input>
        </div>
        <div className={styles.center}>
          <input type="color" value={formContent.color} onChange={(evt)=>{
            setformContent({...formContent, text: {...formContent.text, color:evt.target.value}})
          }}/>
        </div>

        <div className={styles.inlineContainer, styles.center}>
          <label>
            <input forhtml="underline" type="checkbox" checked={formContent.text.underliner}
            onChange={(evt)=>{
              setformContent({...formContent, text:{...formContent.text, underliner: evt.target.checked}});
            }}></input>
            Underline
          </label>
          <label>
            <input forhtml="bold" type="checkbox" checked={formContent.text.bold}
            onChange={(evt)=>{
              setformContent({...formContent, text:{...formContent.text, bold: evt.target.checked}})
            }}></input>
            Bold
          </label>
        </div>
        <div className={styles.center}>
          <select id="font" onChange={(evt)=>{
            setformContent({...formContent, text: {...formContent.text, font : evt.target.value}})
          }} value={formContent.text.font}>
            <option value="Arial">Arial</option>
            <option value="Ink Free">Ink Free</option>
          </select>
        </div>
      </div>
      <div className={styles.center}>
        <select id="image" onChange={(evt)=>{
          setformContent({...formContent, imageId:parseInt(evt.target.value, 10)})
        }} value={formContent.imageId}>
          <option value=""></option>
          {images.map((image, i)=>
              <option key={'optionImage-'+i} value={image.id}>{image.nom}</option>
            )}
        </select>
      </div>
      <div className={styles.show}>
        <span style={{color:formContent.text.color, wordWrap: "break-word"}}>
          {JSON.stringify(formContent)}
        </span>
      </div>
      <div className={styles.center}>
      <Button label="reset" color="#FFFFFF" onclick={(evt)=>{
        setformContent(initialState.currentMeme);
        store.dispatch({type: REDUCER_ACTIONS.CLEAR_CURRENT})
      }}/>
      <Button label="View" color="#FFFFFF" onclick={(evt)=>{
        store.dispatch({type: REDUCER_ACTIONS.SET_CURRENT, value:formContent})
      }}/>
      <Button label={formContent && formContent.id?'SAVE':'ADD'} color="#FFFFFF" onclick={(evt)=>{
        store.dispatch({type: REDUCER_ACTIONS.CHANGE_MEME, value:formContent})
      }}/>
      </div>
    </div>      
    </form>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default withRouter(MemeForm);
