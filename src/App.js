import React, {useState} from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // const [valueStrawberry, setValueStrawberry] = useState();

    return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <section id="strawberrys">
                <label htmlFor="strawberryCounter">🍓 Aardbeien
                    <button>-</button>
                    <input
                        type="number"
                        id="strawberryCounter"
                        placeholder="0"
                    />
                    <button>+</button>
                </label>
            </section>
            <section id="bannanas">
                <label>🍌 Bananen
                    <button>-</button>
                    <input type="number" placeholder="0"/>
                    <button>+</button>
                </label>
            </section>
            <section id="apples">
                <label>🍏 Appels
                    <button>-</button>
                    <input type="number" placeholder="0"/>
                    <button>+</button>
                </label>
            </section>
            <section id="kiwis">
                <label>🥝 Kiwi's
                    <button>-</button>
                    <input type="number" placeholder="0"/>
                    <button>+</button>
                </label>
            </section>
            <button type="submit">Reset</button>
        </form>
    </>
  );
}

export default App;