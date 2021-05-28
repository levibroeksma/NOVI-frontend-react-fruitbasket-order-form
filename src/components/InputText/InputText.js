import React from "react";

function InputText({name, errors, register, nameId, required, minAge, placeholder, maxTextLength, patternPostalCode}) {
    return (
        <label htmlFor={name} id={nameId}>
            <input type="text" placeholder={placeholder} name={name} id={name} {...register(name, {required: required, min: minAge, maxLength: maxTextLength, pattern: patternPostalCode})}/>
            {errors[name] && errors[name].type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
            {errors[name] && errors[name].type === "min" && <span className="errorMessage">Je moet minimaal 18 jaar zijn als je een bestelling wilt plaatsen.</span>}
            {errors[name] && errors[name].type === "maxLength" && <span className="errorMessage">Dit veld mag maximaal 500 tekens bevatten.</span>}
            {errors[name] && errors[name].type === "pattern" && <span className="errorMessage">Voer een geldige postcode in.</span>}
        </label>
    )
}

export default InputText;