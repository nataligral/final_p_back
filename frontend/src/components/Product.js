import React from 'react'
import { Card } from "react-bootstrap";
import Rating from './Rating'
import { Link } from 'react-router-dom'


const Product = ({Product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${Product._id}`}>
        <Card.Img src={Product.image} />
        </Link>

        <Card.Body>
            <Link to={`/product/${Product._id}`}>
            <Card.Title as='div'>
                <strong>{Product.name}</strong>
            </Card.Title>
            </Link>
            <Card.Text as='div'>
                <div className='my-2'>
                <Rating value ={Product.rating} text={`${Product.numReviews} reviews`} color= {`#f8e825 in obj`}/>
                </div>
            </Card.Text>

            <Card.Text as='h3'>
                ₪{Product.price}
            </Card.Text>

        </Card.Body>
        
    </Card>
  )
}

export default Product