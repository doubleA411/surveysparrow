import React from 'react'
import './scss/signup-card.scss';
import { cta } from './config';

function SignUpCard() {
  return (
    <div className='signup-card'>
      <p className='text'>Get me Started With the Best Voice of Customer Software</p>
      
        <div className="cta">
          <div className="cta-first">
            <input type="text" placeholder="sample@mycompany.com" />
            <button>Signup for free</button>
          </div>
          <div className="cta-last">
            {cta.map((c) => (
              <p>{c} •</p>
            ))}
            <p className="demo">Need a demo ?</p>
          </div>
        </div>
      </div>
    
  );
}

export default SignUpCard