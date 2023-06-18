import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

/**
 * Contiene un Input y un Button
 */
const Form = (
    { inputType,
        inputBgColor,
        inputPlaceholder,
        buttonText,
        buttonBgColor,
        buttonTextColor
    }) => {
    const [value, setValue] = useState("");

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <Input
                type={inputType}
                value={value}
                backgroundColor={inputBgColor}
                placeHolder={inputPlaceholder}
                onChange={handleOnChange}
            />
            <Button
                backgroundColor={buttonBgColor}
                color={buttonTextColor}
            >
                {buttonText}
            </Button>
        </>
    )
}

Form.propTypes = {
    /**
     * Tipo de input
     */
    inputType: PropTypes.string.isRequired,
    /**
     * Color del fondo del Input
     */
    inputBgColor: PropTypes.string,
    /**
     * Placeholder de Input
     */
    inputPlaceholder: PropTypes.string,
    /**
     * Label del boton
     */
    buttonText: PropTypes.node.isRequired,
    /**
     * El color del fondo del boton
     */
    buttonBgColor: PropTypes.string,
    /**
     * El color del texto del boton
     */
    buttonTextColor: PropTypes.string
}

Form.defaultProps = {
    inputType: "text",
    buttonText: "Button"
}

export default Form;