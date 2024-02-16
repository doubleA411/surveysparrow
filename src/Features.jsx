import React from 'react';
import './scss/features.scss';
import { features } from './config';
import banner from './assets/undraw_review_fkgn 1.png'

function Features() {
  return (
    <div className='features'>
        <div className='features-left'>
            {features.map(f => (
                <div className='feature'>
                    <div className='circle'>
                        <img src={f.img} alt="" />
                    </div>
                    <p className='title'>{f.title}</p>
                </div>
            ))}
        </div>
        <div className='features-right'>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default Features