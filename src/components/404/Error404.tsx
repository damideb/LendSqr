import React from 'react'
import './error404.scss'
import errImg from '../../assets/images/404.jpg'

const Error404 = () => {
  return (
    <div className='error-img'>
      <img src={errImg} alt='Error display' />
    </div>
  )
}

export default Error404