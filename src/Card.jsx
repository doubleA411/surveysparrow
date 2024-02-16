import React from 'react'
import './scss/card.scss'
import { cards } from './config'

function Card() {
  return (
    <div className='card-container'>

        {cards.map(card => (
            <div className='card' >
                <p className='title'>{card.title}</p>
                <p className='desc'>{card.desc}</p>
                <div className='circle'>
                  <img src={card.img} alt="" />
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default Card