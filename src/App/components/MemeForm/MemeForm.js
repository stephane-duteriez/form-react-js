import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../Button/Button';

const initialState = {
  name : '',
  text:{x:0,y:0,value:'', underline:false, bold:false, color:"#555555"},
  imageId:'img/DSC04018.jpg',
  font:"Arial"
};
const MemeForm = (props) => {
  const [formContent, setformContent] = useState(initialState); 
  return (
    <form className={styles.MemeForm} data-testid="MemeForm">
    <div className={styles.container}>
      <div className={styles.center}>
        <input type="text" placeholder="nom du meme" id="name"
        value={formContent.name}
          onChange={(evt)=>{
            setformContent({...formContent, name:evt.target.value})
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
          <input  type="number" value={formContent.x} placeholder="X"
            onChange={(evt)=>{
              setformContent({...formContent, text:{...formContent.text, x:parseInt(evt.target.value)}});
            }}></input>
          <input  type="number" value={formContent.y} placeholder="Y"
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
          setformContent({...formContent, imageId:evt.target.value})
        }} value={formContent.imageId}>
          <option value="img/DSC04018.jpg">Joseph.jpg</option>
          <option value="img/DSC04048.jpg">Natalie.jpg</option>
        </select>
      </div>
      <div className={styles.show}>
        <span style={{color:formContent.text.color, wordWrap: "break-word"}}>
          {JSON.stringify(formContent)}
        </span>
      </div>
      <div className={styles.center}>
      <Button label="reset" color="#FFFFFF" onclick={(evt)=>{
        setformContent(initialState)
      }}/>
      <Button label="Ok" color="#FFFFFF" onclick={(evt)=>{
        props.onSubmit(formContent);
      }}/>
      </div>

    </div>      
    </form>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
export {initialState};
