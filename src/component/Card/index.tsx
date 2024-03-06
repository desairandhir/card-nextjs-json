import React from 'react';
import Style from './card.module.css';
interface CardProps {
    image: string;
    id: number;
    name: string;
    breed: string;
}

const Card: React.FC<CardProps> = ({ image, id, name, breed }) => (
    <div className={Style.contentWrapper}>
        <div className={Style.card}>
            <div className={Style.cardImage}>
                <img src={image} alt="" />
            </div>
            <h2>ID : {id}</h2>
            <h2>Name : {name}</h2>
            <p>Breed : {breed}</p>
        </div>
    </div>
);


export default Card;