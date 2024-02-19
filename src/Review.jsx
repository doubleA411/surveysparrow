import React from 'react'
import { brands } from './config';
import { medals,faces } from './config';
import './scss/_reviews.scss';

function Review(props) {

  return (
    <div className="review">
      <p className="title">A Quick Peek at the Reviews</p>
      <p className="sub">Head over and read through what users say about us</p>
      <div className="medals">
        {medals.map((medal) => (
          <img src={medal} alt="" />
        ))}
      </div>
      <p className="title">See how well we fare over our competitors</p>
      <div className="brands">
        {brands.map((brand) => (
          <img src={brand} alt="" />
        ))}
      </div>
      <div className="quotes">
        <p className="title">Our customers love us. Want to know why?</p>
        <p className="quote">
          "SurveySparrow has revolutionized the feedback form. The
          conversational style offers a fresh take on information gathering
          whether it be feedback from your audience, gathering information from
          leads to determine if they are a solid fit, or client on-boarding."
        </p>
      </div>
      {props.isMobile ? (
        <div className="face-mobile">
          <img src={faces[2]} alt="" />
          <p className="name">Alex Healy</p>
          <p className="desg">Digital Producer at Heat + Deloitte Digital</p>
        </div>
      ) : (
        <div className="faces">
          {faces.map((face, index) =>
            index === 2 ? (
              <div className="face">
                <img src={face} alt="" />
                <p className="name">Alex Healy</p>
                <p className="desg">
                  Digital Producer at Heat + Deloitte Digital
                </p>
              </div>
            ) : (
              <img src={face} alt="" />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Review