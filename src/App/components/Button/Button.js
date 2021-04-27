import React from 'react';
import './Button.css';

function Button(props) {
    return <div 
        style={{
            backgroundColor : props.couleurDeFond,
            fontSize : props.taillePolice + 'px'
        }}
        className="Button"
        onClick={(evt)=>{props.onclick(evt)}}>
        {props.label}
    </div>
}

export default Button;