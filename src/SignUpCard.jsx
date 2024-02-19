import React from 'react'
import './scss/_signup-card.scss';
import { cta } from './config';

function SignUpCard(props) {
  return (
    <div className={`${props.bottom ? "signup-card-2" : "signup-card"}`}>
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