import React from 'react'
import { Container,Row } from 'react-bootstrap'

function Foter() {
  return (
  <>
  
  <section className='bg-col-foter'>
  <Container >
        <Row>
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='col-12 d-flex justify-content-center pb-5'>
                <div className='col-5'>
                </div>
                <div className='col-12 flogo text-center'>
                <h5 className='pt-5'>ROLLS-ROYCE</h5>
                <p>MOTOR-CARS</p>
                </div>
                <div className='col-5'>
                </div>
            </div>
        </div>    
        <hr/>
        <div className='d-flex flex-wrap justify-content-center '>
            <div className='col-12  d-flex flex-wrap py-3'>
                <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                    <h6>PRE-OWNED</h6>
                    <h6>FIND A DELER</h6>
                    <h6>CAREEAR</h6>
                </div> 
                <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                    <h6>COOKIES</h6>
                    <h6>EU TYRE LABELS</h6>
                    <h6>SITE MAP</h6>
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                    <h6>PRESSCLUB</h6>
                    <h6>FAQS</h6>
                    <h6>WHISPERS</h6>
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                    <h6>LEGAL</h6>
                    <h6>CONTACT</h6>
                    <h6>LANGUAGE</h6>
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                    <h6>COMPLAINTS</h6>
                    <h6>PRIVACY</h6>
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-2 d-flex flex-wrap align-items-center'>
                    <h4><i class="fa-brands fa-youtube"></i></h4>
                    <h4><i class="fa-brands fa-facebook"></i></h4>
                    <h4><i class="fa-brands fa-instagram"></i></h4>
                    <h4><i class="fa-brands fa-linkedin"></i></h4>
                    <h4><i class="fa-brands fa-x-twitter"></i></h4>
                </div>
            </div>
        </div>
        <hr/>``
        </Row>
    </Container>
  </section>

  </>
  )
}

export default Foter
