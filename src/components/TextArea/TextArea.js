import React from "react";

function TextArea({name, nameId, errors, register, required, maxTextLength, placeholder, labelContent}) {
    return(
        <>
            <label htmlFor={name} id={nameId}>{labelContent}</label>
            <textarea name={name} id={name} cols="30" rows="10" placeholder={placeholder} {...register(name, {required: required, maxLength: maxTextLength})}></textarea>
            {errors[name] && errors[name].type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
            {errors[name] && errors[name].type === "maxLength" && <span className="errorMessage">Dit veld mag maximaal 500 tekens bevatten.</span>}
        </>
    )
}

export default TextArea;