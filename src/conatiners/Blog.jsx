import React from 'react'
import Article from '../component/Article';
import '../assets/Blog.css'

const Blog = () => {
  return (
    <section className='blog base-margin d-flex' id='#blog'>
      <div className='blog-header'>
        <h4 className='blog-header-p text-color' > A lot is happening,We are blogging about it.</h4>
      </div>
      <Article/>
    </section>
  )
}

export default Blog