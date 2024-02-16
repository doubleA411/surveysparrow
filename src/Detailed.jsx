import React from 'react'
import './scss/detailed.scss';
import DetailView from './DetailView';
import { detials } from './config';

function Detailed() {
  return (
    <div className="detailed">
      <div className="text-cont">
        <p className="text-lg">
          Choosing Your Voice Of Customer Software: Features
        </p>
        <p className="text-sm">
          When there are plenty of voice of customer software available in the
          market, how will you round-in on the perfect one for your business? We
          have rounded in on the top features which any voice of customer
          software must offer:
        </p>
      </div>
      {detials.map((d, index) => (
        <DetailView
          title={d.title}
          desc={d.desc}
          img={d.img}
          index = {index}
          
        />
      ))}
    </div>
  );
}

export default Detailed