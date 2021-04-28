import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const MemeForm = () => {
  const [formContent, setformContent] = useState({
    name : 'tjs', count:0, color:'#000000'
  }); 
  return (
    <form className={styles.MemeForm} data-testid="MemeForm">
      <input type="text" placeholder="nom de la formation"
      value={formContent.name}
        onChange={(evt)=>{
          setformContent({...formContent, name:evt.target.value})
        }}
      /><br/>
      <input type="number" placeholder="nb de participant" value={formContent.count}
        onChange={(evt)=>{
          setformContent({...formContent, count:parseInt(evt.target.value, 10)})
        }}
      /><br/>
      <input type="color" value={formContent.color} onChange={(evt)=>{
        setformContent({...formContent, color:evt.target.value})
      }}/><br/>
      <input type="submit" value="Soumettre"/><br/>
      voici le contenu actuellement saisie :
      <span style={{color:formContent.color}}>
      {JSON.stringify(formContent)}
      </span>
       

    </form>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
