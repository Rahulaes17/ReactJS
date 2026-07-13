import React from 'react'
import { Bookmark } from 'lucide-react'

const cards = (props) => {
  return (
    <div className='card'>
      <div className="top">
        <img src={props.img} alt="" />
        <button>save <Bookmark size={15}/></button>
      </div>
      <div className="mid">
        <h4>{props.cname} <span>{props.time}</span></h4>
        <h2>{props.role}</h2>
        <div className="about">
          <p>{props.about1}</p>
          <p>{props.about2}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h5>{props.salary}</h5>
          <p>{props.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default cards
