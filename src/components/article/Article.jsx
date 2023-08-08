import React from 'react'
import './article.css';

const Article = ({imgUrl , date , title , more}) => {
  return (
    <div className='gpt3__article'>
    <div className="gpt3__article_container">
    <img src={imgUrl} alt="" />
    <div className="gpt3__article_container_content">
    <p>{date}</p>
    <h3>{title}</h3>
    <h5>{more}</h5>
    </div>
    
    </div>
    </div>
  )
}

export default Article
