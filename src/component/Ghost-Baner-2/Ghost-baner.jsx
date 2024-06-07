import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Ghostbaner() {
  return (
    <>
      <Container fluid>
        <Row>
          <div className='col-12 baner-2 dflex-flex-wrap'>
            <img src='image\baner-2.webp' />
            {/* <img className='tire' src='image\tire.webp' />
            <img className='tire-logo' src='image\tire-logo.webp' /> */}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Ghostbaner;
