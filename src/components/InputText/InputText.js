import React from "react";

function InputText() {
    return (
        <label htmlFor="lastName" id="lastNameId">
            <input type="text" placeholder="Achternaam..." name="lastName" id="lastName" {...register("lastName", {required: true})}/>
            {errors.lastName && errors.lastName.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
        </label>
    )
}

export default InputText;