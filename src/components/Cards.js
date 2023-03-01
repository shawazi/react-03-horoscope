import React from "react";
import { data } from "../helper/data";

const handleClick = (e) => {
    e.preventDefault();
    console.log("you clicked a card");
    const Flip = () => {
        return (
            <div className="container">
            {data.map((item, id) => (
                <div onClick={handleClick} className="card" key={id}>
                    <h3>{item.title}</h3>
                    <div>
                        <p className="show">{item.desc} </p>
                    </div>
                </div>
            ))}
        </div>
        )
    Flip();
    }
  }

const Cards = () => {
    return (
        <div className="container">
            {data.map((item, id) => (
                <div onClick={handleClick} className="card" key={id}>
                    <h3>{item.title}</h3>
                    <p>Birthdays: {item.date}</p>
                    <div>
                        <p className="hide">{item.desc} </p>
                    </div>
                    <img className="small-img" src={item.image} alt="Zodiac Symbol"></img>
                </div>
            ))}
        </div>
    );
};

export default Cards;