import React from "react";
import PropTypes from "prop-types";
import "./button.css";
/**
 * Este es un boton normal
 */
const Button = ({label, backgroundColor, color})=>{
    return(
        <button
            className="button"
            style={{backgroundColor: backgroundColor, color: color}}
        >{label}
        </button>
    )
}

Button.propTypes = {
    /**
     * Texto del boton
     */
    label: PropTypes.string.isRequired,
    /**
     * Color del fondo
     */
    backgroundColor: PropTypes.string,
    /**
     * Color del texto
     */
    color: PropTypes.string
}

Button.defaultProps ={
    backgroundColor: null,
    color: null
}

export default Button