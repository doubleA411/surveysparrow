import React from 'react'
import './scss/footer.scss'
import { icons } from './config';

import phone from './assets/phone.svg'
import mail from './assets/email.svg';
import badge from './assets/badge.png'


function Footer() {
  return (
    <div className="footer">
      <div className="child">
        <p>Company</p>
        <ul>
          <li>About Us</li>
          <li>News</li>
          <li>Careers</li>
          <li>Media</li>
        </ul>
      </div>
      <div className="child">
        <p>Resources</p>
        <ul>
          <li>Partners</li>
          <li>Case Studies</li>
          <li>Wall Of Love</li>
          <li>Developers</li>
          <li>Community</li>
        </ul>
      </div>
      <div className="child">
        <p>Free Tools</p>
        <ul>
          <li>Templates</li>
          <li>Rate The Meeting</li>
          <li>Awards Generator</li>
          <li>NPS Benchmarks</li>
          <li>NPS Calculator</li>
          <li>SaaS Affiliate Calculator</li>
        </ul>
      </div>
      <div className="child">
        <p>Sales</p>
        <ul>
          <li>Free Trial</li>
          <li>Contact Sales</li>
          <li>Request Demo</li>
          <li>Plans & Pricing</li>
        </ul>
      </div>
      <div className="connect">
        <p>Connect</p>
        <div className="contact">
          <div className="phone">
            <img src={phone} alt="" />
            <p> +1 (800) 481-0410 </p>
          </div>
          <div className="phone">
            <img src={mail} alt="" />
            <p>support@surveysparrow.com</p>
          </div>
          <div className="icons">
            {icons.map((icon) => (
              <div className="circle">
                <img src={icon} alt="" />
              </div>
            ))}
          </div>
        </div>
        <img src={badge} alt="" />
      </div>
    </div>
  );
}

export default Footer