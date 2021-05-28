import React from "react";

function Checkbox({name, errors, register, nameId, required}) {
    return (
        <>
            <label htmlFor={name} id={nameId}>
                <input type="checkbox" name={name} {...register("termsAndConditions", {required: required})}/> Ik ga akkoord met de Algemene Voorwaarden.
            </label>
            {errors[name] && errors[name].type === "required" && <span className="errorMessage">Accepteer de algemene voorwaarden om verder te gaan.</span>}
        </>
    )
}

export default Checkbox