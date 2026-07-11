import React from 'react'

const cards = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <button>save</button>
      <h5>{props.cname}</h5>
      <h4>{props.role}</h4>
      <div className="about">
            <p>{props.about1}</p>
            <p>{props.about2}</p>
      </div>
        <h5>{props.salary}</h5>
      <button>Apply now</button>
    </div>
  )
}

export default cards
