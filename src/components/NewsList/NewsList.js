import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Alert, Spinner} from 'react-bootstrap'
import './NewsList.css'
import imageNotFound from '../../assets/image-not-found.png'
import { useEffect } from 'react'
import { fetchNews } from '../../redux/news/action'
import { useDispatch, useSelector } from 'react-redux'

const NewsList = () => {
  const news = useSelector(state => state.news)
  const { newsList, loading, error } = news
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])
  return (
    <Container>
      <Row>
        { loading ? (<div className='spinner-wrapper'>
        <Spinner animation="border" role="status"></Spinner>
        </div>) : (error ? (<Alert variant='danger'>
          {error}
        </Alert>) : (newsList.map((singleNews, index) => (
          <Col md={4} key={index} className="single-news">
            <Card style={{width: "18rem"}}>           
                <Card.Img variant="top" src={singleNews.urlToImage ? singleNews.urlToImage : imageNotFound} />
                <Card.Body className="btn-wrapper">
                <Card.Title>
                  {
                  singleNews.title && singleNews.title.length > 60 ? 
                  `${singleNews.title.slice(0, 60)}...` 
                  : singleNews.title
                  }
                  </Card.Title>
                <Card.Text>
                  {
                  singleNews.description && singleNews.description.length > 110 ? 
                  `${singleNews.description.slice(0, 110)}...` 
                  : singleNews.description
                  }
                  </Card.Text>
                <Link className="btn btn-dark" to={`/news/${index}`}>Read more</Link>
                </Card.Body>
              </Card>
          </Col>
        ))))
        }
      </Row>
    </Container>
  )
}

export default NewsList
