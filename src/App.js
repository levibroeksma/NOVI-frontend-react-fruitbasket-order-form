import React, {useState} from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import Header from "./components/Header/Header";
import headerImage from "./assets/screenshot-logo.png";
import Button from "./components/Button/Button";
import InputText from "./components/InputText/InputText";
import Checkbox from "./components/Checkbox/Checkbox";
import TextArea from "./components/TextArea/TextArea";
import Fruit from "./components/Fruit/Fruit"

function App() {
    const {handleSubmit, register, formState: { errors }, watch} = useForm();
    const onSubmit = data => console.log(data);
    const selectedRadio = watch('frequention');

    const [countStrawberry, setCountStrawberry] = useState(0);
    const [countBanana, setCountBanana] = useState(0);
    const [countApple, setCountApple] = useState(0);
    const [countKiwi, setCountKiwi] = useState(0);

    function decreaseCount(count, setCount) {
        if (count === 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }
    function increaseCount(count, setCount) {
        setCount(count + 1);
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
                    <Fruit fruitId="aardbei" title="🍓  Aarbeien" deleteFruit={() => decreaseCount(countStrawberry, setCountStrawberry)} addFruit={() => {increaseCount(countStrawberry, setCountStrawberry)}} count={countStrawberry}/>
                    <Fruit fruitId="banana" title="🍌  Bananen" deleteFruit={() => decreaseCount(countBanana, setCountBanana)} addFruit={() => {increaseCount(countBanana, setCountBanana)}} count={countBanana}/>
                    <Fruit fruitId="apple" title="🍏  Appels" deleteFruit={() => decreaseCount(countApple, setCountApple)} addFruit={() => {increaseCount(countApple, setCountApple)}} count={countApple}/>
                    <Fruit fruitId="apple" title="🥝  Kiwi's" deleteFruit={() => decreaseCount(countKiwi, setCountKiwi)} addFruit={() => {increaseCount(countKiwi, setCountKiwi)}} count={countKiwi} />
                    <Button type="submit" onClick={resetCounter} title="Reset" />
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