import React from 'react'
import {  Row, Col} from   'react-bootstrap'
import Product from '../Components/Product.js'
import products from '../products'

function HomeScreen() {
    return (
        <div>
           <Row>
            {
                products.map(product =>(
                    <Col key={product._id} sm={12}  mad={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))
            }   
            </Row> 
        </div>
    )
}

export default HomeScreen
