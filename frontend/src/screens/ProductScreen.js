import React,{useState,useEffect} from 'react'
// import {Link  } from 'react-router-dom'
// import { Row, Col, Image, ListGroup,Button, Card } from 'react-bootstrap'
// import  Rating  from '../components/Rating'
import axios from 'axios'

const ProducteScreen = ({match}) => {
   const [product, setProduct] = useState([])

    useEffect(() => {

       const fetchProduct = async () => {
        const {data} = await axios.get(`/api/products/${match.params.id}`)
        setProduct(data)
      }
  
      fetchProduct()
  
    },[])
  return (
    <div>
         {product ? product.name : 'Cake not found'}
    </div>
  )
}

export default ProducteScreen