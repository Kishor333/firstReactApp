import React from "react";
import './robot.css';

const Card = ({id,email,name}) => {
    return (
        <div className="bg-light-green dib br4 pa4 ma3 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?200*200`} alt="this" className="card" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
