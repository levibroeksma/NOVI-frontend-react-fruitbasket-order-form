import React, {useState} from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import Header from "./Header";
import headerImage from "./assets/screenshot-logo.png"

function App() {
    const {handleSubmit, register} = useForm();
    const onSubmit = data => console.log(data);
    // const [countStrawberry, setCountStrawberry] = useState(0);
    // const [countBanana, setCountBanana] = useState(0);
    // const [countApple, setCountApple] = useState(0);
    // const [countKiwi, setCountKiwi] = useState(0);

    // function decreaseCountStrawberry() {
    //     if (countStrawberry === 0) {
    //         setCountStrawberry(0);
    //     } else {
    //         setCountStrawberry(countStrawberry - 1);
    //     }
    // }
    // function increaseCountStrawberry() {
    //     setCountStrawberry(countStrawberry + 1);
    // }
    // function decreaseCountBanana() {
    //     if (countBanana === 0) {
    //         setCountBanana(0)
    //     } else {
    //         setCountBanana(countBanana - 1);
    //     }
    // }
    // function increaseCountBanana() {
    //     setCountBanana(countBanana + 1);
    // }
    // function decreaseCountApple() {
    //     if (countApple === 0) {
    //         setCountApple(0)
    //     } else {
    //         setCountApple(countApple - 1);
    //     }
    // }
    // function increaseCountApple() {
    //     setCountApple(countApple + 1);
    // }
    // function decreaseCountKiwi() {
    //     if (countKiwi === 0) {
    //         setCountKiwi(0)
    //     } else {
    //         setCountKiwi(countKiwi - 1);
    //     }
    // }
    // function increaseCountKiwi() {
    //     setCountKiwi(countKiwi + 1);
    // }
    //
    // function resetCounter() {
    //     setCountStrawberry(0);
    //     setCountBanana(0);
    //     setCountApple(0);
    //     setCountKiwi(0);
    // }

    return (
        <>
            <Header
                headerImage={headerImage}
                title="Fruitmand Bezorgservice"
            />
            <h1>Fruitmand bezorgservice</h1>
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}

            {/*    <section id="aardbei">*/}
            {/*        <label>🍓 Aarbeien*/}
            {/*            <button id="minus" onClick={decreaseCountStrawberry}>-</button>*/}
            {/*            <span>{countStrawberry}</span>*/}
            {/*            <button id="plus" onClick={increaseCountStrawberry}>+</button>*/}
            {/*        </label>*/}
            {/*    </section>*/}
            {/*    <section id="banana">*/}
            {/*        <label>🍌 Bananen*/}
            {/*            <button id="minus" onClick={decreaseCountBanana}>-</button>*/}
            {/*            <span>{countBanana}</span>*/}
            {/*            <button id="plus" onClick={increaseCountBanana}>+</button>*/}
            {/*        </label>*/}
            {/*    </section>*/}
            {/*    <section id="apple">*/}
            {/*        <label>🍏 Appels*/}
            {/*            <button id="minus" onClick={decreaseCountApple}>-</button>*/}
            {/*            <span>{countApple}</span>*/}
            {/*            <button id="plus" onClick={increaseCountApple}>+</button>*/}
            {/*        </label>*/}
            {/*    </section>*/}
            {/*    <section id="kiwi">*/}
            {/*        <label>🥝 Kiwi's*/}
            {/*            <button id="minus" onClick={decreaseCountKiwi}>-</button>*/}
            {/*            <span>{countKiwi}</span>*/}
            {/*            <button id="plus" onClick={increaseCountKiwi}>+</button>*/}
            {/*        </label>*/}
            {/*    </section>*/}
            {/*    <button type="submit" onClick={resetCounter}>Reset</button>*/}
            {/*</form>*/}

            <form id="orderForm" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="firstName" id="firstNameId">
                <input type="text" placeholder="Voornaam..." {...register("firstName", {required: true})} />
                </label>
                <label htmlFor="lastName" id="lastNameId">
                <input type="text" placeholder="Achternaam..." name="lastName" id="lastName" {...register("lastName", {required: true})}/>
                </label>
                <label htmlFor="age" id="ageId">
                    <input type="number" placeholder="Leeftijd..." name="age" id="age" {...register("age", {required: true, min: 18})}/>
                </label>
                <label htmlFor="postalCode" id="postalCodeId">
                    <input type="text" placeholder="Postcode..." name="postalCode" id="postalCode" {...register("postalCode", {required: true})}/>
                </label>
                <label htmlFor="houseNumber">
                    <input type="number" name="houseNumber" id="houseNumber" placeholder="Huisnummer..." {...register("houseNumber",{required: true})}/>
                </label>
                <label htmlFor="houseNumberAddition">
                    <input type="text" id="houseNumberAddition" placeholder="Toevoeging..."/>
                </label>

                {/*Radio buttons*/}

                <div className="frequentionHolder">
                    <h2>Bezorgfrequentie</h2>
                    <label htmlFor="everyWeek">
                        <input type="radio" id="everyWeek" name="frequention"/> Iedere week
                    </label>
                    <label htmlFor="everyOtherWeek">
                        <input type="radio" id="everyOtherWeek" name="frequention"/> Om de week
                    </label>
                    <label htmlFor="everyMonth">
                        <input type="radio" id="everyMonth" name="frequention"/> Iedere maand
                    </label>
                    <label htmlFor="other">
                        <input type="radio" id="other" name="frequention"/> Anders
                    </label>
                </div>
                <label htmlFor="remarks" id="remarksId">Opmerking:</label>
                <textarea name="remarks" id="remarks" cols="30" rows="10" placeholder="Uw vraag of opmerking ... "></textarea>

                {/*Button*/}
                <button type="submit">Verzend</button>
            </form>
        </>
    );
}

export default App;