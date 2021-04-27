import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

<<<<<<< HEAD
function FormContainer({ children }) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
=======
function FormContainer({children}) {
    return (
        <Container>
            <Row className="justify-content-mad-center">
                <Col xs={12} md={6}>
                    {children}
                </Col>

            </Row>
            
>>>>>>> df338e906fd0705a5802517d52f96f655d7ed059
        </Container>
    )
}

<<<<<<< HEAD

=======
>>>>>>> df338e906fd0705a5802517d52f96f655d7ed059
export default FormContainer
