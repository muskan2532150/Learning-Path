import React from 'react'
import '../assets/Intro.css'

const Intro = () => {
  return (
    <section className='gpt-intro base-margin d-flex' id='#gpt-intro'>
      <div className="sec-one d-flex">
        <h4 className='color-border'>What is GPT-4</h4>
        <p>
          We so opinion friends me message as delight. Whole front do of plate heard oh ought.
          His defective nor convinced residence own. Connection has put impossible own apartments boisterous.
          At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="sec-two d-flex">
        <p className='text-margin'>The possibilities are beyond your imagination</p>
        <a href="#">Explore The Library</a>
      </div>
      <div className="sec-three d-flex">
        <div><h6 className='color-border'>Chatbots</h6>
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
        </div>
        <div><h6 className='color-border'>Knowledgebase</h6>
          <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p></div>
        <div><h6 className='color-border'> Education</h6>
          <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p></div>
      </div>
    </section>
  )
}

export default Intro