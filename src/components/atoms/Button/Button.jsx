import React from "react";
import PropTypes from "prop-types";
import "./button.css";
/**
 * Este es un boton normal
 */
const Button = ({children, backgroundColor, color})=>{
    return(
        <button
            className="button"
            style={{backgroundColor: backgroundColor, color: color}}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    /**
     * Texto del boton
     */
    children: PropTypes.node.isRequired,
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
    children: "Button",
    backgroundColor: null,
    color: null
}

export default Button