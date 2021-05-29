import React from "react";

function Fruit({title, fruitId, deleteFruit, addFruit, count}) {
    return (
        <section id={fruitId}>
            <div className="fruit-holder">
                <h2>{title}</h2>
                <button id="minus" onClick={deleteFruit}>-</button>
                <span>{count}</span>
                <button id="plus" onClick={addFruit}>+</button>
            </div>
        </section>
    )
}

export default Fruit;