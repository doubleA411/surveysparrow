import React from 'react'
import "./scss/footer-card.scss";


function FooterCard() {
  return (
    <div className='footer-card'>
      <p className='text'>See it, to believe it.</p>
      <div className="cta">
        <div className="cta-first">
          <input type="text" placeholder="sample@mycompany.com" />
          <button>Get started Today</button>
        </div>
        <div className="cta-last">
          <p className="demo">14-day free trial | Unlock all features</p>
        </div>
      </div>
    </div>
  );
}

export default FooterCard