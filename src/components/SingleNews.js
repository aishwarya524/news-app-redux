import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './NewsList/NewsList.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import imageNotFound from '../assets/image-not-found.png'
import './Style.css'

const SingleNews = () => {
    const { id } = useParams()
    const newsList = useSelector(state => state.news.newsList)
    let singleNews = newsList && id && newsList[id]
    console.log(singleNews)
  return (
    <Container>
        {singleNews && (
          <div className='singlenews-wrapper'>
          <div className='single-title'>
            <h1>{singleNews.title}</h1>
          </div>
          <img className='single-img' src={singleNews.image_url ? singleNews.image_url : imageNotFound} alt='singleImg'/>
          <div className='single-description'>
            <h5>{singleNews.description}</h5>
          </div>
          <Button variant='dark' href={singleNews.link}>View Source</Button>
          </div>
        )
        }
    </Container>
  )
}

export default SingleNews
