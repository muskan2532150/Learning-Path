import React from 'react'
import '../assets/Article.css';

const Article = () => {

  const articles = [{
    date: "Sep 26, 2021",
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    url: "#",
    img: "images/Article0.png"
  }, {
    date: "Jan 31, 2022",
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    url: "#",
    img: "images/Article2.png"
  }, {
    date: "Feb 26, 2022",
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    url: "#",
    img: "images/Article3.png"
  },
  {
    date: "March 15, 2022",
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    url: "#",
    img: "images/Article4.png"
  }, {
    date: "March 25, 2022",
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    url: "#",
    img: "images/Article5.png"
  }]

  return (
    <div className='article-container'>
      {articles.map((item, index) => (
        <div className='article' key={index}>
          <div className='article-img'>
            <img src={item.img} alt={`Article${index}`} />
          </div>
          <div className='article-body'>
            <h6>{item.date}</h6>
            <p>{item.desc}</p>
            <a href={item.url} className='article-link'>Read Full Article</a>
          </div>
        </div>

      ))}
    </div>
  )
}

export default Article