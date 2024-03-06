'use client'
import Card from "@/component/Card/index";
import React, { useState } from 'react';
import data from '../data.json';
import Style from "../component/Card/card.module.css";

export default function Home() {
  const [userData, setUserData] = useState(data)
  return (
    <main>
      <div className={Style.cardContainer}>
        {
          userData.map((card) => (
            <>
              <Card key={card.id} image={card.image} id={card.id} name={card.name} breed={card.breed} />
            </>
          ))}
      </div>
    </main>
  );
}