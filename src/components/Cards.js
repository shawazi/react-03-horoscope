import React from "react";
import { data } from "../helper/data";



const Cards = () => {
    return (
        <div className="container">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default Cards;