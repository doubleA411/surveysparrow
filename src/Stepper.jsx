import React from 'react'
import { card2 } from "./config";
import './scss/stepper.scss'


function Stepper() {
  return (
    <div className="stepper-cont">
      <div className="steppers">
        {card2.map((card) => (
          <div className="stepper" key={card.num}>
            <p className="num">{card.num}</p>
            <div className='step-card'>
              <img src={card.img} alt=""></img>
              <p className="title">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="end-text">
        Setting the VoC program objective involves identifying the purpose of
        conducting the voice of customer program. Once the goal is set, you need
        to find the methods of collecting feedback; it can be done in the
        following ways:
      </p>
    </div>
  );
}

export default Stepper