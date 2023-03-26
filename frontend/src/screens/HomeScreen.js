import React,{useState,useEffect} from 'react'
import { Row, Col} from 'react-bootstrap';
// import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products/')
      setProducts(data)
    }

    fetchProducts()

  },[])

  return (
    <div>
        <h1> latest cakes</h1>
        <Row>
            {products.map(Product => (

                <Col key={Product._id} sm={12} md ={6} lg={4} xl={3}>
                <Product Product = {Product}/>
                </Col>

            ))}
        </Row>
    </div>
  )
}

export default HomeScreen