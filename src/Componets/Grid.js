import React from 'react'

import photo from '../asset/photo.jpg'
import photo1 from '../asset/photo1.jpg'
import photo2 from '../asset/photo2.jpg'
import photo3 from '../asset/photo3.jpg'
import photo4 from '../asset/photo4.jpg'
import photo5 from '../asset/photo5.jpg'

import './grid.css';

const Grid = () => {
  return (
    <div className='featured'>
      <div className="title">
        <h1>Featured</h1>
      </div>
      <div className="featured-wrapper">
        <div className="main">
        <img src={photo1} alt='' />
        </div>
        <div>
        <img src={photo2} alt='' />
        </div>
        <div>
        <img src={photo3} alt='' />
        </div>
        <div>
        <img src={photo4} alt='' />
        </div>
        <div>
        <img src={photo5} alt='' />
        </div>
        <div>
        <img src={photo} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Grid