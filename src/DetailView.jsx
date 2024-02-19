import React from 'react'
import './scss/_detailview.scss';

function DetailView(props) {
  return (
    <div className={props.index % 2 === 0 ? "view-white" : "view-reverse"}>
      <div className="content">
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
      </div>
      <div className="image">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}

export default DetailView