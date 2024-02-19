import React from 'react'
import "./scss/_grey-view.scss"

function GreyView(props) {
  return (
    <div className='view'>

        <div className='title'>
            <div className='circle'>
              <img src={props.img} alt="" />
            </div>
            <p>{props.title}</p>
        </div>
        <p className='desc'>{props.desc}</p>

    </div>
  )
}

export default GreyView