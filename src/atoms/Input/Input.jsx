import React from "react";
import PropTypes from "prop-types";
import "./input.css";

const Input = ({value,backgroundColor, placeHolder})=>{
    return(
        <input 
            type="text" 
            className="input"
            style={{backgroundColor: backgroundColor}}
            placeholder={placeHolder}
            value={value}
        />
    )
}

Input.propTypes ={
    /**
     * Valor del contenido
     */
    value: PropTypes.string,
    /**
     * Color del fondo
     */
    backgroundColor: PropTypes.string,
    /**
     * El placeholder del input
     */
    placeHolder: PropTypes.string
}

Input.defaultProps = {
    value: "example",
    backgroundColor: null,
    placeHolder: "placeholder"
}

export default Input
