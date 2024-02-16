import React from 'react'
import './scss/purpose.scss'
import SignUpCard from './SignUpCard';
import Accordian from './Accordian';
import { accordian } from './config';

function Purpose() {
  return (
    <div className="purpose">
      <p className="purpose-text">
        Once you collect the data, examine the responses to uncover various
        facets and draw crucial insights. Once you get a firm idea about what
        needs to be done, all you need to do is set the balls rolling to achieve
        it. A voice of customer software helps you through and through in every
        single one the steps to help you gather data that can be utilized for
        the following three principal purposes:
      </p>
      {accordian.map((a) => (
        <div className='accordian'>
          <Accordian
            title={a.title}
            content={
              a.content
            }
          />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Purpose