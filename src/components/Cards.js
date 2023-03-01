import React, { useState } from "react";
import { data } from "../helper/data";

const Cards = () => {
    const [display, setDisplay] = useState(
        data.map(() => ({isDisplayed: false }))
    );

    const handleClick = id => {
        console.log("clicked")
        setDisplay((prev) =>
            prev.map((status, index) => 
                index === id ? { isDisplayed: !status.isDisplayed } : status
            )
        )
    };

    return (
        <div className="container">
            {data.map((item, id) => (
                <div className="card" onClick={() => handleClick(id)} key={id}>
                    <h3>{item.title}</h3>
                    {display[id].isDisplayed && (
                    <div>
                    <p className="hide">{item.desc}</p>
                    </div>
                    )}
                    {!display[id].isDisplayed && (
                    <div>
                    <p>Birthdays: {item.date}</p>
                    <p className="show">{item.desc}</p>
                    <img className="small-img" src={item.image} alt="Zodiac Symbol"></img>
                    </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Cards;