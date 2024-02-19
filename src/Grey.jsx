import React from 'react'
import './scss/_grey.scss';
import { grey } from './config';
import GreyView from './GreyView';
import SignUpCard from './SignUpCard';

function Grey() {
  return (
    <div className='grey-view'>
      <p className='text-lg'>Choosing SurveySparrow As Your Voice Of Customer Software</p>
      <p className='text-sm'>
        Customers form the crux of any business, and programs like the voice of
        customer let to know your customers inside-out. Choosing SurveySparrow’s
        voice of customer software comes with abundant advantages, have a look
        right here!
      </p>  

      <div className='details-view'>
       {grey.map(g => (
        <GreyView title={g.title} desc={g.desc} img={g.img} />
       )) }
      </div>
    </div>
  );
}

export default Grey