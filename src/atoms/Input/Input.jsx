import React from "react";
import PropTypes from "prop-types";
import "./input.css";

const Input = ({type,value,backgroundColor, placeHolder, onChange})=>{
    return(
        <input 
            type= {type} 
            className="input"
            style={{backgroundColor: backgroundColor}}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
        />
    )
}

Input.propTypes ={
    /**
     * Tipo del input
     */
    type: PropTypes.string.isRequired,
    /**
     * Valor del contenido
     */
    value: PropTypes.string.isRequired,
    /**
     * Color del fondo
     */
    backgroundColor: PropTypes.string,
    /**
     * El placeholder del input
     */
    placeHolder: PropTypes.string,
    /**
     * Funcion que detecta el cambio del input
     */
    onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    type: "text",
    value: "example",
    backgroundColor: null,
    placeHolder: "placeholder",
    onChange: null
}

export default Input
