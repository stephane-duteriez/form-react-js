import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../Button/Button';

const initialState = {
  name : '',
  text:{x:0,y:0,value:'', underline:false, bold:false, color:"#555555"},
  image:''
};
const MemeForm = (props) => {
  const [formContent, setformContent] = useState(initialState); 
  return (
    <form className={styles.MemeForm} data-testid="MemeForm">
      <label htmlFor="name">Nom du meme : </label><br/>
      <input type="text" placeholder="nom du meme" id="name"
      value={formContent.name}
        onChange={(evt)=>{
          setformContent({...formContent, name:evt.target.value})
        }}
      /><br/>
      <div class={styles.text}>
        <label htmlFor="text">Text : </label>
        <input type="text" value={formContent.text.value} id="text"
          onChange={(evt)=>{
            setformContent({...formContent, text:{...formContent.text,value:evt.target.value}});
          }}></input><br/>
        <div class={styles.inlineContainer}>
          <label>X : </label>
          <input  type="number" value={formContent.x}
            onChange={(evt)=>{
              setformContent({...formContent, text:{...formContent.text, x:parseInt(evt.target.value)}});
            }}></input>
          <label>Y : </label>
          <input  type="number" value={formContent.y}
            onChange={(evt)=>{
              setformContent({...formContent, text:{...formContent.text, y:parseInt(evt.target.value)}});
            }}></input>
        </div>
        <label id="color">Color : </label>
        <input type="color" value={formContent.color} onChange={(evt)=>{
          setformContent({...formContent, color:evt.target.value})
        }}/><br/>
        <div class={styles.inlineContainer}>
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
       
      </div>
      <div>
        <label htmlFor="image">Image : </label>
        <select id="image" onChange={(evt)=>{
          setformContent({...formContent, image:evt.target.value})
        }} value={formContent.image}>
          <option value="img/test.jpg">test.jpg</option>
          <option value="img/test2.jpg">test2.jpg</option>
        </select>
      </div>
      <div className={styles.show}>
      <span style={{color:formContent.text.color}}>
      {JSON.stringify(formContent)}
      </span>
      </div>

      <Button label="reset" color="#FFFFFF" onclick={(evt)=>{
        setformContent(initialState)
      }}/>
      <Button label="Ok" color="#FFFFFF" onclick={(evt)=>{
        props.onSubmit(formContent);
      }}/><br/>
      
    </form>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
export {initialState};
