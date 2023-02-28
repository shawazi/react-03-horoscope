import React from "react";
import { data } from "../helper/data";



const Cards = () => {
    return (
        <div className="container">
            {data.map((item, index) => (
                <div className="card" key={index}>
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