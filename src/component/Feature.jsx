import React from 'react'
import '../assets/Feature.css'

const Feature = () => {

  const feature = [
    {
      title: 'Become the tended active',
      info: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
    },
    {
      title: 'Improving end distrusts instantly ',
      info: 'From they fine john he give of rich he. They age and draw mrs like.Improving end distrusts may instantly was household applauded.'
    },
    {
      title: 'Message or am nothing',
      info: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
    },
    {
      title: 'Really boy law county',
      info: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
    }]

  return (
    <>
    <div className='feature-1'>
      <div className='feature-heading'>
        <p>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</p>
        <p>Request Early Access to Get Started</p>
      </div>
      <div>
        {feature.map((item, index) => (
          <div className='feature-sub' key={index}>
            <p>{item.title} </p>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="feature-1">
      <div className="feature-heading">
      <img src="../images/Feature-image.png" alt="" className="feature-img" />
      </div>
      <div className='feature-2'>
        <p className='feature2-p1'>Request Early Access to Get Started</p>
        <p className='feature2-p2'>Request Early Access to Get Started</p>
        <p className='feature-body'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
<p className='feature2-p4'>Request Early Access to Get Started</p>
      </div>

    </div>
    </>
  )
}

export default Feature