import React from 'react'
import { Link } from 'react-router-dom'

const Bread = ({page}) => {
  return (
    <div
    className="hero-wrap hero-bread"
    style={{ backgroundImage: 'url("images/bg_6.jpg")' }}
  >
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9  text-center">
        
          <h1 className="mb-0 bread">{page}</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Bread