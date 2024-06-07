import React from 'react'
import { Container, Row } from 'react-bootstrap'
function Textbtn() {
    return (
        <>
            <Container fluid>
                <Row>
                    <div className='d-flex flex-wrap justify-content-center align-items-center text1 Text'>
                        <div className='col-12 text-center'>
                            <h2>
                                EXPERIENCE INFINITE BESPOKE <br /> EXPRESSION WITH GHOST.
                            </h2>
                            <p className='py-5 text-dark'>Each Ghost is as unique as its owner — yours and yours alone. Infuse its pure canvas with  <br /> dynamism and express your personality in every detail.</p>
                            <section className="buttons d-flex flex-wrap justify-content-center align-items-center col-12">
                                <button className="draw main-btn">MAKE AN ENQUIRY <i class="fa-solid fa-arrow-right"></i></button>
                                <button className="draw main-btn">VIEW IN DETAIL <i class="fa-solid fa-arrow-right"></i></button>
                            </section>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Textbtn