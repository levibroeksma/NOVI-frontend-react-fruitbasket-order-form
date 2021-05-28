import React, {useState} from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import Header from "./components/Header/Header";
import headerImage from "./assets/screenshot-logo.png";
import Button from "./components/Button/Button";
import InputText from "./components/InputText/InputText";
import Checkbox from "./components/Checkbox/Checkbox";
import TextArea from "./components/TextArea/TextArea";

function App() {
    const {handleSubmit, register, formState: { errors }, watch} = useForm();
    const onSubmit = data => console.log(data);
    const selectedRadio = watch('frequention');

    const [countStrawberry, setCountStrawberry] = useState(0);
    const [countBanana, setCountBanana] = useState(0);
    const [countApple, setCountApple] = useState(0);
    const [countKiwi, setCountKiwi] = useState(0);

    function decreaseCountStrawberry() {
        if (countStrawberry === 0) {
            setCountStrawberry(0);
        } else {
            setCountStrawberry(countStrawberry - 1);
        }
    }
    function increaseCountStrawberry() {
        setCountStrawberry(countStrawberry + 1);
    }
    function decreaseCountBanana() {
        if (countBanana === 0) {
            setCountBanana(0)
        } else {
            setCountBanana(countBanana - 1);
        }
    }
    function increaseCountBanana() {
        setCountBanana(countBanana + 1);
    }
    function decreaseCountApple() {
        if (countApple === 0) {
            setCountApple(0)
        } else {
            setCountApple(countApple - 1);
        }
    }
    function increaseCountApple() {
        setCountApple(countApple + 1);
    }
    function decreaseCountKiwi() {
        if (countKiwi === 0) {
            setCountKiwi(0)
        } else {
            setCountKiwi(countKiwi - 1);
        }
    }
    function increaseCountKiwi() {
        setCountKiwi(countKiwi + 1);
    }

    function resetCounter() {
        setCountStrawberry(0);
        setCountBanana(0);
        setCountApple(0);
        setCountKiwi(0);
    }

    return (
        <>
            <Header
                headerImage={headerImage}
                title="Fruitmand Bezorgservice"
            />
            <h1>Fruitmand bezorgservice</h1>
            <div className="page-wrapper">

                {/*FRUIT COUNTER*/}

                <div className="fruit-counter">
                    <section id="aardbei">
                        <div className="fruit-holder"><h2>🍓  Aarbeien</h2>
                            <button id="minus" onClick={decreaseCountStrawberry}>-</button>
                            <span>{countStrawberry}</span>
                            <button id="plus" onClick={increaseCountStrawberry}>+</button>
                        </div>
                    </section>
                    <section id="banana">
                        <div className="fruit-holder"><h2>🍌  Bananen</h2>
                            <button id="minus" onClick={decreaseCountBanana}>-</button>
                            <span>{countBanana}</span>
                            <button id="plus" onClick={increaseCountBanana}>+</button>
                        </div>
                    </section>
                    <section id="apple">
                        <div className="fruit-holder"><h2>🍏  Appels</h2>
                            <button id="minus" onClick={decreaseCountApple}>-</button>
                            <span>{countApple}</span>
                            <button id="plus" onClick={increaseCountApple}>+</button>
                        </div>
                    </section>
                    <section id="kiwi">
                        <div className="fruit-holder"><h2>🥝  Kiwi's</h2>
                            <button id="minus" onClick={decreaseCountKiwi}>-</button>
                            <span>{countKiwi}</span>
                            <button id="plus" onClick={increaseCountKiwi}>+</button>
                        </div>
                    </section>

                    <Button
                        type="submit"
                        onClick={resetCounter}
                        title="Reset"
                    />
                </div>

                {/*CONTACT FORMULIER*/}

                <form id="orderForm" onSubmit={handleSubmit(onSubmit)}>
                    <InputText name="firstName" nameId="firstNameId" errors={errors} register={register} required={true} placeholder="Voornaam..." />

                    <InputText name="lastName" nameId="lastNameId" errors={errors} register={register} required={true} placeholder="Voornaam..." />

                    <InputText name="age" errors={errors} register={register} nameId="ageId" required={true} minAge={18} placeholder="Leeftijd..." />

                    <InputText name="postalCode" nameId="postalCodeId" register={register} errors={errors} required={true} placeholder="Postcode..." patternPostalCode={/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i} />

                    <InputText name="houseNumber" nameId="houseNumberId" register={register} errors={errors} required={true} placeholder="Huisnummer..."/>

                    <InputText name="houseNumberAddition" nameId="houseNumberAdditionId" register={register} errors={errors} placeholder="Toevoeging..."/>

                    <div className="frequentionHolder">
                        <h2>Bezorgfrequentie</h2>
                        <label htmlFor="everyWeek">
                            <input type="radio" id="everyWeek" name="frequention" value="Iedere week" {...register("frequention", {required: true})}/> Iedere week
                        </label>
                        <label htmlFor="everyOtherWeek">
                            <input type="radio" id="everyOtherWeek" name="frequention" value="Om de week" {...register("frequention", {required: true})}/> Om de week
                        </label>
                        <label htmlFor="everyMonth">
                            <input type="radio" id="everyMonth" name="frequention" value="Iedere maand" {...register("frequention", {required: true})}/> Iedere maand
                        </label>
                        <label htmlFor="other">
                            <input type="radio" id="other" name="frequention" value="anders" {...register("frequention", {required: true})}/> Anders
                        </label>

                        {selectedRadio === 'anders' && (
                            <input type="text" id="frequentionAndersId" name="extraFrequentionInput"{...register("frequentionAnders", { required: true })}/>
                        )}
                        {errors.frequentionAnders && errors.frequentionAnders.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                    </div>
                    {errors.frequention && errors.frequention.type === "required" && <span className="errorMessage">Je moet een keuze maken.</span>}

                    <TextArea name="remarks" nameId="remarksId" errors={errors} register={register} placeholder="Uw vraag of opmerking." maxTextLength={500} labelContent="Opmerkingen:" required={true} />

                    <Checkbox name="termsAndConditions" nameId="termsAndConditionsId" register={register} errors={errors} required={true} />

                    <Button type="submit" title="Verzend" />
                </form>
            </div>
        </>
    );
}

export default App;

// OUDE CODE

{/*<label htmlFor="firstName" id="firstNameId">*/}
{/*    <input type="text" name="firstName" id="firstName" placeholder="Voornaam..."{...register("firstName", {required: true})}/>*/}
{/*    {errors.firstName && errors.firstName.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}*/}
{/*</label>*/}

{/*<label htmlFor="lastName" id="lastNameId">*/}
{/*    <input type="text" placeholder="Achternaam..." name="lastName" id="lastName" {...register("lastName", {required: true})}/>*/}
{/*    {errors.lastName && errors.lastName.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}*/}
{/*</label>*/}

{/*<label htmlFor="age" id="ageId">*/}
{/*    <input type="number" placeholder="Leeftijd..." name="age" id="age" {...register("age", {required: true, min: 18})}/>*/}
{/*    {errors.age && errors.age.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}*/}
{/*    {errors.age && errors.age.type === "min" && <span className="errorMessage">Je moet minimaal 18 jaar zijn als je een bestelling wilt plaatsen.</span>}*/}
{/*</label>*/}

{/*<label htmlFor="postalCode" id="postalCodeId">*/}
{/*    <input name="postalCode" type="text" placeholder="Postcode..." {...register("postalCode", {required: true, pattern: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i})} />*/}
{/*    {errors.postalCode && errors.postalCode.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}*/}
{/*    {errors.postalCode && errors.postalCode.type === "pattern" && <span className="errorMessage">Voer een geldige postcode in.</span>}*/}
{/*</label>*/}

{/*<label htmlFor="houseNumber"  id="houseNumberId" >*/}
{/*    <input type="number" name="houseNumber" id="houseNumber" placeholder="Huisnummer..." {...register("houseNumber",{required: true})}/>*/}
{/*    {errors.houseNumber && errors.houseNumber.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}*/}
{/*</label>*/}

{/*<label htmlFor="houseNumberAddition" id="houseNumberAdditionId">*/}
{/*    <input type="text" id="houseNumberAddition" placeholder="Toevoeging..." {...register("houseNumberAddition")}/>*/}
{/*</label>*/}

{/*<label htmlFor="remarks" id="remarksId">Opmerking:</label>*/}
{/*<textarea name="remarks" id="remarks" cols="30" rows="10" placeholder="Uw vraag of opmerking..." {...register("remarks", {required: true, maxLength: 500})}></textarea>*/}
{/*{errors.remarks && errors.remarks.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}*/}
{/*{errors.remarks && errors.remarks.type === "maxLength" && <span className="errorMessage">Dit veld mag maximaal 500 tekens bevatten.</span>}*/}

{/*<label htmlFor="termsAndConditions" id="termsAndConditionsId">*/}
{/*    <input type="checkbox" name="termsAndConditions" {...register("termsAndConditions", {required: true})}/> Ik ga akkoord met de Algemene Voorwaarden.*/}
{/*</label>*/}
{/*{errors.termsAndConditions && errors.termsAndConditions.type === "required" && <span className="errorMessage">Accepteer de algemene voorwaarden om verder te gaan.</span>}*/}
