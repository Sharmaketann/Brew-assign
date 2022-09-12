import React from 'react'
import './article.css'

const Article = ({ imgUrl, title, owner, hashcode }) => (
  <div className='container_article'>
    <div className='container_article-image'>
      <img src={imgUrl} alt='blog_image' />
    </div>
    <div className='container_article-content'>
      <div>
        <p>{owner}</p>
        <h3>{title}</h3>
        <p>{hashcode}</p>
      </div>
    </div>
  </div>
)

export default Article
