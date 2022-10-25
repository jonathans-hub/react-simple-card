import React from 'react'
import "./style.css"

export default function Image(props) {
  return (
    <div>
        <img className="image" src={props.src}></img>
    </div>
  )
}
