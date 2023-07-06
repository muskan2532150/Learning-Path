import React from 'react'
import '../assets/Header.css'

const Header = () => {
  return (
    <section className='header base-margin d-flex'>
      <div className='intro'>
        <h1 className="heading text-color">
          Let’s Build Something
          amazing with GPT-3
          OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.
        </p>
        <div className="intro-form d-flex">
          <input type="email" placeholder='YOUR EMAIL ADDRESS' />
          <button className="intro-form-btn" >Get Started</button>
        </div>
      </div>
      <div className="intro-img">
        <img src="images/intro-img.png" alt="" />
      </div>
    </section>
  )
}

export default Header