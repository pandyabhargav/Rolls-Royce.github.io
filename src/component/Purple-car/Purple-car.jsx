import React from 'react'
import { Container, Row } from 'react-bootstrap'
function Purplecar() {
  return (
    <>
    <Container fluid>
        <Row>
            <div className='col-12 d-flex flex-wrap purple-car'>
                <img src='image/blue-car.webp' />
            </div>
        </Row>
    </Container>
    </>
  )
}

export default Purplecar;
