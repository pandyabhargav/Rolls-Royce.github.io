import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
function Paralx() {
    useEffect(() => {
        AOS.init();
      },[]);
    return (
        <>
            <Container fluid>
                <Row>
                    <div className='d-flex flex-wrap col-12 alighn-items-centert'>
                        <div className='d-flex col-12 flex-wrap justify-content-end alighn-items-centert'>
                            <div className='col-5 par-img-1'>
                                <img className='img-1' src='\image\cq5dam.web.1920 (7).webp' data-aos="fade-up"
     data-aos-duration="3000"/>
                            </div>
                        </div>
                        <div className='d-flex col-12 flex-wrap justify-content-start alighn-items-centert'>
                            <div className='col-5 par-img-2'>
                                <img className='img-2' src='\image\cq5dam.web.1920 (8).webp' data-aos="fade-up"
     data-aos-duration="3000"/>
                            </div>
                        </div>
                        <div className='d-flex col-12 flex-wrap justify-content-center alighn-items-centert'>
                            <div className='col-10 par-img-3'>
                                <img className='img-3' src='\image\cq5dam.web.1920 (9).webp' data-aos="fade-up"
     data-aos-duration="3000"/>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Paralx
