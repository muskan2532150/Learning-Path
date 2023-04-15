import React from 'react'
import Article from '../component/Article'

const Blog = () => {
  return (
    <section>
      <div>
        <h4 className='blog-header'> A lot is happening,We are blogging about it.</h4>
      </div>
      <Article/>
    </section>
  )
}

export default Blog