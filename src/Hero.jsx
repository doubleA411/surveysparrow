import React from 'react'
import { cta } from './config';

import banner from './assets/Banner 1.png'
import './scss/hero.scss'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <p className='title'>Voice of Customer Software</p>
        <p className='subtitle'>
          Tap out salient data & pertinent feedback about customers with Voice
          of Customer Software
        </p>
        <div className="cta">
          <div className='cta-first'>
            <input type="text" placeholder="sample@mycompany.com" />
            <button>Signup for free</button>
          </div>
          <div className='cta-last'>
            {cta.map(c => (
                <p>
                    {c} •
                </p>
            ))}
            <p className='demo'>Need a demo ?</p>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default Hero