import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
    return <div data-testid="Button"
        style={{...props.style,
            backgroundColor : props.couleurDeFond,
            fontSize : props.taillePolice + 'px'
        }}
        className="Button"
        onClick={(evt)=>{props.onclick(evt)}}>
        {props.label}
    </div>
}
Button.propTypes={
    label:PropTypes.string.isRequired,
    couleurDeFond:PropTypes.string.isRequired,
    taillePolice:PropTypes.number,
    onclick:PropTypes.func.isRequired
}

Button.defaultProps={
    taillePolice:32,
    couleurDeFond:'green'
}

export default Button;