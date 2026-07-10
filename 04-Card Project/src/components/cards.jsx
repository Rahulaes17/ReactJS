import React from 'react'

const cards = (props) => {
  return (
    <div>
        <img src={props.img} alt="" />
        <button>save</button>
      <h5>{props.cname}</h5>
      <h3>{props.role}</h3>
      <div className="about">
            {props.about1},{props.about2}
      </div>
        
      <button>Apply now</button>
    </div>
  )
}

export default cards
