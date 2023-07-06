import React from 'react'
import '../assets/Brand.css'

const Brand = () => {
  return (
    <div className='brand'>
      <ul className='d-flex'>
        <li><img src="images/google.png" alt="google" /></li>
        <li><img src="images/slack.png" alt="slack" /></li>
        <li><img src="images/dropbox.png" alt="dropbox" /></li>
        <li><img src="images/shopify.png" alt="shopify" /></li>
      </ul>
    </div>
  )
}

export default Brand