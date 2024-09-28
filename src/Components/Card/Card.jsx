import React from 'react'
import './Card.css'
export default function Card({name, age, desc='no desc', bg }) {



  return (
    <div className='card' style={{background: bg}}>         
              <h1>Name: {name}</h1>
              <h2>age: {age}</h2>
              <p>{desc}</p>
         </div>
  )
}
