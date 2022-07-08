import React from 'react'

import photo from '../asset/photo.jpg'
import photo1 from '../asset/photo1.jpg'
import photo2 from '../asset/photo2.jpg'
import photo3 from '../asset/photo3.jpg'
import photo4 from '../asset/photo4.jpg'
import photo5 from '../asset/photo5.jpg'

const Main = () => {
  
  return (
    <div className='featured'>
    <div className="title">
      <h1>Featured</h1>
    </div>
    <div className="featured-wrapper">
      <div>
      <img src={photo1} alt='' />
      {/* <p className='text__5'> The cost of living in this complete house is a sum of $12,800.00</p> */}
      </div>
      <div>
      <img src={photo2} alt='' />
      {/* <p className='text__4'> The cost of living in this complete house is a sum of $12,800.00</p> */}
      </div>
      <div className='main'>
      <img src={photo3} alt='' />
      <p className='text__3'> The cost of living in this complete house is a sum of $12,800.00</p>
      </div>
      <div>
      <img src={photo4} alt='' />
      {/* <p className='text__2'> The cost of living in this complete house is a sum of $12,800.00</p> */}
      </div>
      <div>
      <img src={photo5} alt='' />
      {/* <p className='text__1'> The cost of living in this complete house is a sum of $12,800.00</p> */}
      </div>
      <div>
      <img src={photo} alt='' />
      {/* <p className='text'> The cost of living in this complete house is a sum of $12,800.00</p> */}
      </div>
    </div>
  </div>
  )
}

export default Main